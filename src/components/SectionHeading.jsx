function SectionHeading({ number, children, id }) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">[{number}]</span>
      <h2 id={id}>{children}</h2>
    </div>
  )
}

export default SectionHeading

