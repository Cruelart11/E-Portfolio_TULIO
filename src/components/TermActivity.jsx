import DocumentPreview from './DocumentPreview.jsx'

function TermActivity({ type, number, title, description, reflection, documents }) {
  const activitySlug = `${type}-${number}`.toLowerCase().replaceAll(' ', '-')
  const titleId = `${activitySlug}-title`

  return (
    <article className="prelim-activity" aria-labelledby={titleId}>
      <div className="prelim-activity-heading">
        <span>{type} {number}</span>
        <strong>Submitted</strong>
      </div>
      <h2 id={titleId}>{title}</h2>
      <div className="activity-context">
        <section aria-labelledby={`${activitySlug}-description`}>
          <h3 id={`${activitySlug}-description`}>Description</h3>
          <p>{description}</p>
        </section>
        <section aria-labelledby={`${activitySlug}-reflection`}>
          <h3 id={`${activitySlug}-reflection`}>Learning Reflection</h3>
          <p>{reflection}</p>
        </section>
      </div>
      <div className="document-preview-list">
        {documents.map((document) => (
          <DocumentPreview key={`${activitySlug}-${document.title}`} {...document} />
        ))}
      </div>
    </article>
  )
}

export default TermActivity
