function NotebookEvidence({ title, filename, imagePath, alt, description = '', reflection = '' }) {
  const imageUrl = `${import.meta.env.BASE_URL}${imagePath}`

  return (
    <article className="notebook-evidence" aria-label={title}>
      <div className="notebook-evidence-context">
        <section>
          <h3>Description</h3>
          <p>{description}</p>
        </section>
        <section>
          <h3>Learning Reflection</h3>
          <p>{reflection}</p>
        </section>
      </div>

      <div className="notebook-image-card">
        <div className="notebook-image-heading">
          <div>
            <p>Combined assessment evidence</p>
            <h2>{title}</h2>
            <p className="notebook-filename">{filename}</p>
          </div>
          <span aria-hidden="true">JPG</span>
        </div>

        <div className="notebook-image-frame">
          <img src={imageUrl} alt={alt} loading="lazy" />
        </div>

        <div className="document-actions">
          <a href={imageUrl} target="_blank" rel="noreferrer">
            Open full image <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default NotebookEvidence
