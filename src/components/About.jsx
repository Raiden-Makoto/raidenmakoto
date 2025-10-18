function About() {
  return (
    <section id="home" className="content-section">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <div className="circular-frame">
            <img src="/headshot.png" alt="Profile" />
          </div>
        </div>
        <div className="about-text">
          <h2>Hi, I'm Max</h2>
          <p>{import.meta.env.VITE_EDUCATION}</p>
          <p>{import.meta.env.VITE_HOBBIES}</p>
        </div>
      </div>
    </section>
  )
}

export default About
