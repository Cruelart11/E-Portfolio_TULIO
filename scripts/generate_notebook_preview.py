import argparse
import json
import re
from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

parser = argparse.ArgumentParser(description="Generate a safe, read-only HTML notebook preview.")
parser.add_argument("input")
parser.add_argument("output")
parser.add_argument("--title", required=True)
args = parser.parse_args()


def inline_markdown(text):
    rendered = escape(text)
    rendered = re.sub(r"`([^`]+)`", r"<code>\1</code>", rendered)
    rendered = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", rendered)
    rendered = re.sub(
        r"\[([^\]]+)\]\((https?://[^\s)]+)\)",
        r'<a href="\2" target="_blank" rel="noreferrer">\1</a>',
        rendered,
    )
    return rendered


def markdown_to_html(source):
    lines = source.splitlines()
    blocks = []
    paragraph = []
    list_items = []

    def flush_paragraph():
        if paragraph:
            blocks.append(f"<p>{inline_markdown(' '.join(paragraph))}</p>")
            paragraph.clear()

    def flush_list():
        if list_items:
            items = "".join(f"<li>{inline_markdown(item)}</li>" for item in list_items)
            blocks.append(f"<ul>{items}</ul>")
            list_items.clear()

    for line in lines:
        stripped = line.strip()
        heading = re.match(r"^(#{1,6})\s*(.+)$", stripped)
        if heading:
            flush_paragraph()
            flush_list()
            level = min(len(heading.group(1)) + 1, 6)
            blocks.append(f"<h{level}>{inline_markdown(heading.group(2))}</h{level}>")
        elif stripped.startswith(("- ", "* ")):
            flush_paragraph()
            list_items.append(stripped[2:])
        elif not stripped:
            flush_paragraph()
            flush_list()
        else:
            flush_list()
            paragraph.append(stripped)

    flush_paragraph()
    flush_list()
    return "".join(blocks)


def render_output(output):
    output_type = output.get("output_type")
    if output_type == "stream":
        return f'<pre class="output">{escape("".join(output.get("text", [])))}</pre>'

    data = output.get("data", {})
    if "image/png" in data:
        image_data = "".join(data["image/png"])
        return f'<img class="output-image" src="data:image/png;base64,{image_data}" alt="Notebook output">'
    if "text/plain" in data:
        return f'<pre class="output">{escape("".join(data["text/plain"]))}</pre>'
    return ""


notebook_path = ROOT / args.input
output_path = ROOT / args.output
notebook = json.loads(notebook_path.read_text(encoding="utf-8"))

cells = []
code_number = 0
for cell in notebook.get("cells", []):
    source = "".join(cell.get("source", []))
    if cell.get("cell_type") == "markdown":
        cells.append(f'<section class="cell markdown-cell">{markdown_to_html(source)}</section>')
    elif cell.get("cell_type") == "code":
        code_number += 1
        outputs = "".join(render_output(item) for item in cell.get("outputs", []))
        output_block = f'<div class="outputs">{outputs}</div>' if outputs else ""
        cells.append(
            '<section class="cell code-cell">'
            f'<p class="cell-label">Code cell {code_number}</p>'
            f'<pre><code>{escape(source)}</code></pre>{output_block}</section>'
        )

html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{escape(args.title)}</title>
    <style>
      :root {{ color-scheme: dark; font-family: Arial, sans-serif; }}
      * {{ box-sizing: border-box; }}
      body {{ max-width: 980px; margin: 0 auto; padding: 24px; color: #e6edf3; background: #0d1117; }}
      .preview-header {{ margin-bottom: 20px; padding: 18px; border: 1px solid #30363d; border-radius: 10px; background: #161b22; }}
      .preview-header p, .cell-label {{ margin: 0; color: #8b98ac; font: 12px/18px monospace; }}
      .preview-header h1 {{ margin: 6px 0 0; font-size: 24px; line-height: 1.25; }}
      .cell {{ margin: 0 0 14px; padding: 18px; border: 1px solid #30363d; border-radius: 10px; background: #10151d; }}
      .markdown-cell h2, .markdown-cell h3, .markdown-cell h4 {{ margin: 0 0 12px; color: #7ee787; line-height: 1.3; }}
      .markdown-cell h2 {{ font-size: 22px; }}
      .markdown-cell h3 {{ font-size: 18px; }}
      .markdown-cell h4 {{ font-size: 16px; }}
      .markdown-cell p, .markdown-cell li {{ color: #c9d1d9; font-size: 14px; line-height: 1.65; }}
      .markdown-cell p {{ margin: 0; }}
      .markdown-cell p + p, .markdown-cell ul + p, .markdown-cell p + ul {{ margin-top: 12px; }}
      .markdown-cell code {{ padding: 2px 5px; border-radius: 4px; color: #58a6ff; background: #0a0e14; font: 12px/1.5 monospace; }}
      a {{ color: #58a6ff; }}
      pre {{ overflow: auto; margin: 8px 0 0; padding: 14px; border-radius: 7px; color: #e6edf3; background: #0a0e14; font: 12px/1.55 monospace; white-space: pre; }}
      .output {{ margin-top: 10px; border-left: 3px solid #58a6ff; white-space: pre-wrap; }}
      .output-image {{ display: block; max-width: 100%; margin-top: 10px; border-radius: 6px; }}
      @media (max-width: 600px) {{ body {{ padding: 12px; }} .cell, .preview-header {{ padding: 14px; }} }}
    </style>
  </head>
  <body>
    <header class="preview-header">
      <p>Read-only notebook preview · {len(notebook.get('cells', []))} cells</p>
      <h1>{escape(args.title)}</h1>
    </header>
    <main>{''.join(cells)}</main>
  </body>
</html>
"""

output_path.write_text(html, encoding="utf-8")
print(f"Generated {output_path} from {len(notebook.get('cells', []))} cells.")
