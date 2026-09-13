function ProfilePlaceholder() {
  return (
    <div className="profile-window" aria-label="Profile image placeholder">
      <div className="window-bar" aria-hidden="true">
        <span className="window-dot dot-red" />
        <span className="window-dot dot-yellow" />
        <span className="window-dot dot-green" />
        <span className="window-title">profile.jpg</span>
      </div>
      <div className="profile-placeholder">
        <div className="avatar-code" aria-hidden="true">
          <span className="avatar-bracket">{'{'}</span>
          <span className="avatar-initials">JM</span>
          <span className="avatar-bracket">{'}'}</span>
        </div>
        <p>drop profile.jpg here</p>
      </div>
      <div className="status-badge">status: available for internship</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="command">$ whoami</p>
        <h1 id="hero-title">
          Juan Miguel
          <span>Santos</span>
        </h1>
        <p className="hero-description">
          BS Information Technology student building things that run in the terminal and the browser.
          I care about clean commits, readable code, and shipping.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#toolbox">View coursework <span aria-hidden="true">→</span></a>
          <a className="button button-secondary" href="#about">Course expectations</a>
        </div>
      </div>
      <ProfilePlaceholder />
    </section>
  )
}

export default Hero

