function ArchiveDownload({
  title,
  filename,
  meta,
  description,
  filePath,
  actionLabel = 'Download Experiment Data',
}) {
  const fileUrl = `${import.meta.env.BASE_URL}${filePath}`

  return (
    <article className="archive-download-card" aria-label={title}>
      <div className="archive-download-heading">
        <div>
          <p>{meta}</p>
          <h3>{title}</h3>
          <p className="archive-filename">{filename}</p>
        </div>
        <span aria-hidden="true">ZIP</span>
      </div>

      <p className="archive-description">{description}</p>

      <div className="document-actions">
        <a href={fileUrl} download>
          {actionLabel} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </article>
  )
}

export default ArchiveDownload
