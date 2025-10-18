import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'

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
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} scrollToSection={scrollToSection} />
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="main-content">
        <About />
        <br/>
        
        <Projects />
        <br/>

        <Publications />
        <br/>

        <Skills />
        <br/>
      </div>
    </>
  )
}

export default App