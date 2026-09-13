const contacts = [
  ['email', 'jm.santos@school.edu'],
  ['github', 'github.com/jmsantos'],
  ['linkedin', 'in/jmsantos-it'],
]

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <h2 className="command" id="contact-title">$ contact --me</h2>
      <dl className="contact-grid">
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

