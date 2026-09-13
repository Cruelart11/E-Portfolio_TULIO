import profileImage from '../assets/profile.jpg'

function ProfileImage() {
  return (
    <div className="profile-window">
      <div className="window-bar" aria-hidden="true">
        <span className="window-title">profile.jpg</span>
      </div>
      <img className="profile-image" src={profileImage} alt="Portrait of Justine Bradley Tulio" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="command">$ whoami</p>
        <h1 id="hero-title">
          Justine Bradley
          <span>Tulio</span>
        </h1>
        <p className="hero-description">
          BS Information Technology student who enjoys both strategy and relaxation. Gaming, chess,
          food, rest, and esports events are important parts of my life and keep me focused, balanced,
          and connected to the gaming community.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#/prelim">View coursework <span aria-hidden="true">→</span></a>
          <a className="button button-secondary" href="#/course-expectation">Course expectations</a>
        </div>
      </div>
      <ProfileImage />
    </section>
  )
}

export default Hero
