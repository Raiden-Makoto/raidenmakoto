function Sidebar({ sidebarOpen, setSidebarOpen, scrollToSection }) {
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
    </>
  )
}

export default Sidebar
