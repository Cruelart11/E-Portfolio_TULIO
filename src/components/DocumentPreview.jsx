function DocumentPreview({
  title,
  filename,
  meta,
  previewPath,
  filePath,
  fileLabel,
  typeLabel,
  externalUrl,
  externalLabel,
  downloadFile = false,
  isSpreadsheet = false,
}) {
  const basePath = import.meta.env.BASE_URL
  const previewUrl = `${basePath}${previewPath}`
  const fileUrl = `${basePath}${filePath}`

  return (
    <article className="document-preview-card">
      <div className="document-preview-heading">
        <div>
          <p>{meta}</p>
          <h3>{title}</h3>
          <p className="document-filename">{filename}</p>
        </div>
        <span aria-hidden="true">{typeLabel ?? (isSpreadsheet ? 'XLSX' : 'PDF')}</span>
      </div>

      <div className={`document-viewer${isSpreadsheet ? ' is-spreadsheet' : ''}`}>
        <iframe src={previewUrl} title={`${title} preview`} loading="lazy" />
      </div>

      <div className="document-actions">
        <a href={previewUrl} target="_blank" rel="noreferrer">
          Open full preview <span aria-hidden="true">↗</span>
        </a>
        {externalUrl && (
          <a href={externalUrl} target="_blank" rel="noreferrer">
            {externalLabel} <span aria-hidden="true">↗</span>
          </a>
        )}
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          download={isSpreadsheet || downloadFile || undefined}
        >
          {fileLabel} <span aria-hidden="true">{isSpreadsheet ? '↓' : '↗'}</span>
        </a>
      </div>
    </article>
  )
}

export default DocumentPreview
