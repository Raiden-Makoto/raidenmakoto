import { useState } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
          <button className="sidebar-link" onClick={() => scrollToSection('misc')}>Misc</button>
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
            <h2>Raiden Makoto</h2>
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
                <img src="/raiden.webp" alt="Profile" />
              </div>
            </div>
            <div className="about-text">
              <h2>Hi, I'm Raiden Makoto</h2>
              <p>{import.meta.env.VITE_EDUCATION}</p>
              <p>{import.meta.env.VITE_HOBBIES}</p>
            </div>
          </div>
        </section>
        <br/>

        <section id="projects" className="content-section">
          <h1>Projects</h1>
          <p>Alpha beta charlie foxtrot lima</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
        <br/>

        <section id="publications" className="content-section">
          <h1>Publications</h1>
          <p>This is the publications section. Showcase your work, portfolio items, and achievements here.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
              </ul>
            </div>
          </div>
        </section>
        <br/>

        <section id="misc" className="content-section">
          <h1>Misc</h1>
          <p>This is the misc section. Add your misc information here.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
      </div>
    </>
  )
}

export default App
