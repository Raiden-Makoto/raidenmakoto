function Skills() {
  return (
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
            <li>
              MLX
              <span className="skill-icon mlx-icon">MLX</span>
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
  )
}

export default Skills
