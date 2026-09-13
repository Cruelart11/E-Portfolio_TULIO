function PrelimItem({ code, status, title, description, tags }) {
  const isDone = status === 'Done'

  return (
    <article className="prelim-item">
      <div className="prelim-item-meta">
        <span className="prelim-item-code">{code}</span>
        <span className={`prelim-item-status${isDone ? ' is-done' : ''}`}>{status}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tag-list" aria-label={`${title} topics`}>
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  )
}

export default PrelimItem

