import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scannedPdfs = Object.entries(
    import.meta.glob('./assets/pubs/*.pdf', { eager: true, query: '?url', import: 'default' })
  ).map(([path, url]) => {
    const file = path.split('/').pop() || ''
    const name = file.replace(/\.pdf$/i, '')
    return { name, url }
  })
  // Hard-code order: 24, 23, JEI; others follow
  const order = ['qce24paper', 'qce23abstract', 'jeipaper']
  const rank = (n) => {
    const i = order.indexOf(n.toLowerCase())
    return i === -1 ? Number.MAX_SAFE_INTEGER : i
  }
  const sortedPdfs = [...scannedPdfs].sort((a, b) => rank(a.name) - rank(b.name))

  const [pdfFiles] = useState(sortedPdfs)
  const [activePdfUrl, setActivePdfUrl] = useState(sortedPdfs[0]?.url || '')

  // Sample projects data
  const projects = [
    {
      title: "QNetGAN (v3)",
      description: "Hybrid Quantum-Classical Graph Generative Adversarial Network for Molecular Generation,",
      technologies: ["PennyLane", "PyTorch"],
      image: "funkymols.png",
      githubUrl: "https://github.com/Raiden-Makoto/QWGraphGAN-GP"
    },
    {
      title: "Wordle Solver",
      description: "An entropy-based program that solves Wordle in an average of 3.8 guesses, with a 100\% success rate on 1534 past Wordles.",
      technologies: ["Python", "Flask", "HTML/CSS"],
      image: "wordlesolver.png",
      githubUrl: "https://42cummer-entropywordlesolver.hf.space/"
    },
    {
      title: "WheresMyBus",
      description: "Web application providing live Toronto Transit Commission (TTC) bus and streetcar departure times and vehicle tracking to help you plan your commute on the fly.",
      technologies: ["JavaScript", "React", "HTML/CSS", "Flask", "Docker"],
      image: "900express.png",
      githubUrl: "https://wheresmybus.vercel.app/"
    },
    {
      title: "Genshinfy V2",
      description: "AI-powered style transfer tools for generating an anime-style avatar of your face from Genshin Impact character references. You can also just generte avatars based on which ever character you want.",
      technologies: ["Transformers", "Gradio", "PyTorch", "Diffusers", "DinoVision"],
      image: "genshinfy.png",
      githubUrl: "https://42cummer-genshinfyv2.hf.space/"
    },
    {
      title: "Tetris",
      description: "Implemented Tetris in MIPS Assembly. Gameplay (tetromino movement, rotation, line clearing) optimized for performance on a bitmap display. Features custom SFX and power-ups not found in the original version of the game.",
      technologies: ["MIPS Assembly"],
      image: "tetris.png",
      githubUrl: "https://github.com/Raiden-Makoto/Tetris"
    },
    {
      title: "SoundofMusic",
      description: "Pipeline to generate lyrics and matching melody and harmony for pop songs in the style of Taylor Swift.",
      technologies: ["Transformers", "PyTorch", "PyQT", "Music21"],
      image: "soundofmusic.png",
      githubUrl: "https://github.com/Raiden-Makoto/SoundOfMusic"
    }
  ]

  // Auto-cycle through projects every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [projects.length])

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 50; // Match --header-height
      const elementTop = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementTop,
        behavior: 'smooth'
      });
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      
             {/* Sidebar */}
             <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <nav className="sidebar-nav">
          <button className="sidebar-link" onClick={() => scrollToSection('home')}>About</button>
          <button className="sidebar-link" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="sidebar-link" onClick={() => scrollToSection('publications')}>Publications</button>
          <button className="sidebar-link" onClick={() => scrollToSection('skills')}>Skills</button>
        </nav>
             </div>

      <header className="header-bar">
        <div className="header-content">
          <div className="header-left">
            <button className="hamburger-menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <h2>Max Cui</h2>
          </div>
          <div className="social-icons">
            <a href={import.meta.env.VITE_LINKEDIN_URL || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={import.meta.env.VITE_GITHUB_URL || '#'} target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="main-content">
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
        <br/>

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
                {currentProject === 0 && (
                  <div className="hackathon-badge">
                    <span>RESEARCH PROJECT</span>
                  </div>
                )}
                {currentProject === 1 && (
                  <div className="hackathon-badge">
                    <span>DEPLOYED</span>
                  </div>
                )}
                {currentProject === 2 && (
                  <div className="hackathon-badge">
                    <span>DEPLOYED</span>
                  </div>
                )}
                {currentProject === 3 && (
                  <div className="hackathon-badge">
                    <span>DEPLOYED</span>
                  </div>
                )}
                {currentProject === 5 && (
                  <div className="hackathon-badge in-progress">
                    <span>IN PROGRESS</span>
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
        <br/>

        <section id="publications" className="content-section">
          <h1>Publications</h1>
          <div className="pdf-viewer">
            <div className="pdf-sidebar">
              <ul className="pdf-list">
                {pdfFiles.length === 0 && <li className="pdf-empty">No PDFs loaded yet</li>}
                {pdfFiles.map((file) => (
                  <li key={file.url} className={`pdf-item ${activePdfUrl === file.url ? 'active' : ''}`} onClick={() => setActivePdfUrl(file.url)}>
                    <span className="pdf-name">{file.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pdf-content">
              {activePdfUrl ? (
                <iframe title="pdf" src={activePdfUrl} className="pdf-frame" />
              ) : (
                <div className="pdf-placeholder">Select or upload a PDF from the left</div>
              )}
            </div>
          </div>
        </section>
        <br/>

        <section id="skills" className="content-section">
          <h1>Skills</h1>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Languages</h3>
              <ul>
                <li>
                  Python
                  <img className="skill-icon" alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </li>
                <li>
                  C++
                  <img className="skill-icon" alt="C++" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                </li>
                <li>
                  JavaScript
                  <img className="skill-icon" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </li>
                <li>
                  HTML/CSS
                  <img className="skill-icon" alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </li>
                <li>
                  SQL
                  <img className="skill-icon" alt="SQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Frameworks</h3>
              <ul>
                <li>
                  React JS
                  <img className="skill-icon" alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </li>
                <li>
                  Vite
                  <img className="skill-icon" alt="Vite" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" />
                </li>
                <li>
                  TailwindCSS
                  <img className="skill-icon" alt="TailwindCSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </li>
                <li>
                  Flask
                  <img className="skill-icon" alt="Flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                </li>
                <li>
                  PyTorch
                  <img className="skill-icon" alt="PyTorch" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />
                </li>
                <li>
                  TensorFlow
                  <img className="skill-icon" alt="TensorFlow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <h3>Developer Tools</h3>
              <ul>
                <li>
                  Git
                  <img className="skill-icon" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </li>
                <li>
                  GitHub
                  <img className="skill-icon" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </li>
                <li>
                  Cursor
                  <img className="skill-icon" alt="Cursor" src="/cursor.png" />
                </li>
                <li>
                  Jupyter
                  <img className="skill-icon" alt="Jupyter" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" />
                </li>
                <li>
                  Docker
                  <img className="skill-icon" alt="Docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <br/>
      </div>
    </>
  )
}

export default App
