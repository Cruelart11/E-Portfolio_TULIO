import csv
import subprocess
import sys
from html import escape
from pathlib import Path
from shutil import copy2
from zipfile import ZipFile

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph
from openpyxl import load_workbook
from openpyxl.utils import get_column_letter


ROOT = Path(__file__).resolve().parents[1]
DOWNLOADS = Path.home() / "Downloads"
OUTPUT = ROOT / "public" / "documents" / "finals" / "project"
OUTPUT.mkdir(parents=True, exist_ok=True)

DIRECT_FILES = {
    DOWNLOADS / "FineTunners_RAG_Final_Project_Report (1).pdf": OUTPUT / "finetunners-rag-final-project-report.pdf",
    DOWNLOADS / "FineTunners_Member_Responsibility_Matrix.docx": OUTPUT / "finetunners-member-responsibility-matrix.docx",
    DOWNLOADS / "FineTunners_Project_Integrity_and_AI_Usage_Statement.pdf": OUTPUT / "finetunners-project-integrity-ai-usage-statement.pdf",
}

ARCHIVES = {
    DOWNLOADS / "Finetunners_Chatbost_Response_Evaluation 1.zip": OUTPUT / "finetunners-chatbot-response-evaluation.zip",
    DOWNLOADS / "Finetunners_Source_Code_and_Reproducibility_Package.zip": OUTPUT / "finetunners-source-code-reproducibility.zip",
    DOWNLOADS / "Finetunners_Experiment_Logs_and_Checkpoints.zip": OUTPUT / "finetunners-experiment-logs-checkpoints.zip",
    DOWNLOADS / "Finetunner_Chunking Experiments.zip": OUTPUT / "finetunners-chunking-experiments.zip",
}

EXTRACTED_FILES = {
    DOWNLOADS / "Finetunners_Chatbost_Response_Evaluation 1.zip": {
        "Final_Chatbot_Evaluation_Assessed.csv": OUTPUT / "final-chatbot-evaluation-assessed.csv",
        "Final_Chatbot_Response_Evaluation_Assessed.xlsx": OUTPUT / "final-chatbot-response-evaluation-assessed.xlsx",
    },
    DOWNLOADS / "Finetunners_Source_Code_and_Reproducibility_Package.zip": {
        "FineTunners_RAG_Final_Chatbot_and_Evaluation_COMPLETE.ipynb": OUTPUT / "finetunners-rag-final-chatbot-evaluation.ipynb",
    },
    DOWNLOADS / "Finetunner_Chunking Experiments.zip": {
        "Finetuners_RAG_Experiment_Notebook.ipynb": OUTPUT / "finetunners-rag-experiment-notebook.ipynb",
        "Finetuners_RAG_Experiment_Results.xlsx": OUTPUT / "finetunners-rag-experiment-results.xlsx",
    },
}


def require(path):
    if not path.exists():
        raise FileNotFoundError(f"Required source file is missing: {path}")


def copy_sources():
    for source, destination in {**DIRECT_FILES, **ARCHIVES}.items():
        require(source)
        copy2(source, destination)

    for archive_path, entries in EXTRACTED_FILES.items():
        require(archive_path)
        with ZipFile(archive_path) as archive:
            available = set(archive.namelist())
            for entry_name, destination in entries.items():
                if entry_name not in available:
                    raise FileNotFoundError(f"{entry_name} was not found in {archive_path.name}")
                destination.write_bytes(archive.read(entry_name))


def page_shell(title, eyebrow, body, extra_css=""):
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{escape(title)}</title>
    <style>
      :root {{ color-scheme: dark; font-family: Arial, sans-serif; }}
      * {{ box-sizing: border-box; }}
      body {{ max-width: 1040px; margin: 0 auto; padding: 24px; color: #e6edf3; background: #0d1117; }}
      .preview-header {{ margin-bottom: 18px; padding: 18px; border: 1px solid #30363d; border-radius: 10px; background: #161b22; }}
      .preview-header p {{ margin: 0; color: #8b98ac; font: 12px/18px monospace; }}
      .preview-header h1 {{ margin: 6px 0 0; font-size: 24px; line-height: 1.3; }}
      .content {{ padding: 22px; border: 1px solid #30363d; border-radius: 10px; background: #10151d; }}
      h2, h3, h4 {{ color: #7ee787; line-height: 1.35; }}
      h2 {{ margin: 26px 0 12px; font-size: 21px; }}
      h3 {{ margin: 22px 0 10px; font-size: 18px; }}
      h4 {{ margin: 18px 0 8px; font-size: 16px; }}
      p, li {{ color: #c9d1d9; font-size: 14px; line-height: 1.7; }}
      p {{ margin: 0 0 12px; }}
      table {{ width: 100%; margin: 16px 0 24px; border-collapse: collapse; font-size: 12px; }}
      th, td {{ padding: 9px 10px; border: 1px solid #30363d; vertical-align: top; line-height: 1.5; text-align: left; }}
      th {{ color: #7ee787; background: #161b22; }}
      td {{ color: #c9d1d9; background: #0d1117; }}
      .table-wrap {{ overflow-x: auto; }}
      {extra_css}
      @media (max-width: 600px) {{ body {{ padding: 12px; }} .content, .preview-header {{ padding: 14px; }} }}
    </style>
  </head>
  <body>
    <header class="preview-header"><p>{escape(eyebrow)}</p><h1>{escape(title)}</h1></header>
    <main class="content">{body}</main>
  </body>
</html>
"""


def iter_docx_blocks(document):
    for child in document.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, document)
        elif child.tag.endswith("}tbl"):
            yield Table(child, document)


def render_docx(input_path, output_path, title):
    document = Document(input_path)
    blocks = []
    table_count = 0
    for block in iter_docx_blocks(document):
        if isinstance(block, Paragraph):
            text = block.text.strip()
            if not text:
                continue
            style = (block.style.name or "").lower()
            if "title" in style:
                blocks.append(f"<h2>{escape(text)}</h2>")
            elif "heading 1" in style:
                blocks.append(f"<h2>{escape(text)}</h2>")
            elif "heading 2" in style:
                blocks.append(f"<h3>{escape(text)}</h3>")
            elif "heading" in style:
                blocks.append(f"<h4>{escape(text)}</h4>")
            elif "list" in style:
                blocks.append(f"<p>• {escape(text)}</p>")
            else:
                blocks.append(f"<p>{escape(text)}</p>")
        else:
            table_count += 1
            rows = []
            first_row_unique_cells = len({id(cell._tc) for cell in block.rows[0].cells})
            header_rows = 2 if first_row_unique_cells < len(block.rows[0].cells) else 1
            for row_index, row in enumerate(block.rows):
                tag = "th" if row_index < header_rows else "td"
                grouped_cells = []
                for cell in row.cells:
                    if grouped_cells and grouped_cells[-1][0]._tc is cell._tc:
                        grouped_cells[-1][1] += 1
                    else:
                        grouped_cells.append([cell, 1])
                cells = []
                for cell, colspan in grouped_cells:
                    span = f' colspan="{colspan}"' if colspan > 1 else ""
                    value = escape(cell.text.strip()).replace(chr(10), "<br>")
                    cells.append(f"<{tag}{span}>{value}</{tag}>")
                rows.append(f"<tr>{''.join(cells)}</tr>")
            blocks.append(f'<div class="table-wrap"><table>{"".join(rows)}</table></div>')

    eyebrow = f"Read-only DOCX preview · {len(document.paragraphs)} paragraphs · {table_count} tables"
    output_path.write_text(page_shell(title, eyebrow, "".join(blocks)), encoding="utf-8")


def display_value(value):
    if value is None:
        return ""
    if isinstance(value, float):
        return f"{value:.6f}".rstrip("0").rstrip(".")
    return str(value)


def spreadsheet_table(rows, sheet_name):
    if not rows:
        return "<p>No populated cells were found in this worksheet.</p>"
    width = max(len(row) for row in rows)
    header = "".join(f'<th scope="col">{get_column_letter(column)}</th>' for column in range(1, width + 1))
    rendered_rows = []
    for row_index, row in enumerate(rows, start=1):
        values = list(row) + [None] * (width - len(row))
        cells = "".join(f"<td>{escape(display_value(value)).replace(chr(10), '<br>')}</td>" for value in values)
        rendered_rows.append(f'<tr><th scope="row">{row_index}</th>{cells}</tr>')
    return (
        f'<section class="sheet"><h2>{escape(sheet_name)}</h2><div class="table-wrap">'
        f'<table><thead><tr><th aria-label="Row number"></th>{header}</tr></thead>'
        f'<tbody>{"".join(rendered_rows)}</tbody></table></div></section>'
    )


def used_rows(worksheet):
    rows = [list(row) for row in worksheet.iter_rows(values_only=True)]
    while rows and not any(value is not None for value in rows[-1]):
        rows.pop()
    if not rows:
        return []
    last_column = max(
        (index for row in rows for index, value in enumerate(row, start=1) if value is not None),
        default=0,
    )
    return [row[:last_column] for row in rows]


def render_workbook(input_path, output_path, title):
    workbook = load_workbook(input_path, data_only=True, read_only=False)
    sections = [spreadsheet_table(used_rows(sheet), sheet.title) for sheet in workbook.worksheets]
    eyebrow = f"Read-only workbook preview · {len(workbook.worksheets)} worksheets"
    css = ".content { max-width: none; } body { max-width: none; } .sheet + .sheet { margin-top: 36px; } table { min-width: 900px; } thead th { position: sticky; top: 0; z-index: 2; } tbody th { position: sticky; left: 0; color: #8b98ac; background: #161b22; }"
    output_path.write_text(page_shell(title, eyebrow, "".join(sections), css), encoding="utf-8")
    workbook.close()


def render_csv(input_path, output_path, title):
    with input_path.open("r", encoding="utf-8-sig", newline="") as source:
        rows = list(csv.reader(source))
    body = spreadsheet_table(rows, "Evaluation Results")
    eyebrow = f"Read-only CSV preview · {max(len(rows) - 1, 0)} evaluated responses"
    css = ".content { max-width: none; } body { max-width: none; } table { min-width: 3600px; } thead th { position: sticky; top: 0; z-index: 2; } tbody th { position: sticky; left: 0; color: #8b98ac; background: #161b22; }"
    output_path.write_text(page_shell(title, eyebrow, body, css), encoding="utf-8")


def render_notebook(input_name, output_name, title):
    subprocess.run(
        [
            sys.executable,
            str(ROOT / "scripts" / "generate_notebook_preview.py"),
            f"public/documents/finals/project/{input_name}",
            f"public/documents/finals/project/{output_name}",
            "--title",
            title,
        ],
        cwd=ROOT,
        check=True,
    )


def main():
    copy_sources()
    render_docx(
        OUTPUT / "finetunners-member-responsibility-matrix.docx",
        OUTPUT / "finetunners-member-responsibility-matrix-preview.html",
        "FineTunners Member Responsibility Matrix",
    )
    render_workbook(
        OUTPUT / "finetunners-rag-experiment-results.xlsx",
        OUTPUT / "finetunners-rag-experiment-results-preview.html",
        "FineTunners RAG Experiment Results",
    )
    render_workbook(
        OUTPUT / "final-chatbot-response-evaluation-assessed.xlsx",
        OUTPUT / "final-chatbot-response-evaluation-assessed-preview.html",
        "Final Chatbot Response Evaluation",
    )
    render_csv(
        OUTPUT / "final-chatbot-evaluation-assessed.csv",
        OUTPUT / "final-chatbot-evaluation-assessed-preview.html",
        "Final Chatbot Evaluation Data",
    )
    render_notebook(
        "finetunners-rag-experiment-notebook.ipynb",
        "finetunners-rag-experiment-notebook-preview.html",
        "FineTunners RAG Experiment Notebook",
    )
    render_notebook(
        "finetunners-rag-final-chatbot-evaluation.ipynb",
        "finetunners-rag-final-chatbot-evaluation-preview.html",
        "FineTunners RAG Final Chatbot and Evaluation",
    )
    print(f"Prepared Finals project files in {OUTPUT}")


if __name__ == "__main__":
    main()
