import PrelimItem from './PrelimItem.jsx'

function PrelimFolder({ folder, isOpen, onToggle, children, isEmpty = false }) {
  const panelId = `prelim-${folder.title.toLowerCase().replaceAll(' ', '-')}`

  return (
    <section className={`prelim-folder${isOpen ? ' is-open' : ''}`}>
      <button
        className="folder-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={isEmpty ? undefined : panelId}
        onClick={onToggle}
      >
        <span className="folder-icon" aria-hidden="true">{folder.icon}</span>
        <span className="folder-copy">
          <span className="folder-title-line">
            <strong>{folder.title}</strong>
            {folder.count && <span>{folder.count}</span>}
          </span>
          <span className="folder-description">{folder.description}</span>
        </span>
        <span className="folder-chevron" aria-hidden="true">›</span>
      </button>

      {!isEmpty && (
        <div className="folder-content" id={panelId} hidden={!isOpen}>
          {children ?? (folder.items?.length ? (
            folder.items.map((item) => <PrelimItem key={item.code} {...item} />)
          ) : (
            <p className="folder-empty">Files will be added soon.</p>
          ))}
        </div>
      )}
    </section>
  )
}

export default PrelimFolder
