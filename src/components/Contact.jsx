const contacts = [
  ['email', 'justinebradley.tulio@my.jru.edu'],
]

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <h2 className="command" id="contact-title">$ contact --me</h2>
      <dl className="contact-grid contact-grid-single">
        {contacts.map(([label, value]) => (
          <div className="contact-card" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Contact
