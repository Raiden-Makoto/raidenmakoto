import { useState } from 'react'

function Publications() {
  const scannedPdfs = Object.entries(
    import.meta.glob('../assets/pubs/*.pdf', { eager: true, query: '?url', import: 'default' })
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

  return (
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
  )
}

export default Publications
