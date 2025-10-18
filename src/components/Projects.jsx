import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-cycle through projects every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [])

  const nextProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 250)
  }

  const prevProject = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 250)
  }

  return (
    <section id="projects" className="content-section">
      <h1>Projects</h1>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevProject}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        
        <div className={`carousel-content fade-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <div className="project-card">
            {projects[currentProject].isResearch && (
              <div className="hackathon-badge">
                <span>RESEARCH PROJECT</span>
              </div>
            )}
            {projects[currentProject].deployed && (
              <div className="hackathon-badge">
                <span>DEPLOYED</span>
              </div>
            )}
            {projects[currentProject].isHackathon && (
              <div className="hackathon-badge">
                <span>HACKATHON PROJECT</span>
              </div>
            )}
            <a href={projects[currentProject].githubUrl} target="_blank" rel="noopener noreferrer">
              <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-image" />
            </a>
            <div className="project-info">
              <h3>{projects[currentProject].title}</h3>
              <div className="project-tech">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p>{projects[currentProject].description}</p>
            </div>
          </div>
        </div>
        
        <button className="carousel-btn next" onClick={nextProject}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Projects
