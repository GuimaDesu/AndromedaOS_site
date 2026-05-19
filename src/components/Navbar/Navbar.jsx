import { useState } from 'react'
import './Navbar.css'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Fechar menu' : 'Abrir menu'}
      </button>

      <div className="sidebar-content">
        <div className="brand">
          <strong>AndromedaOS</strong>
          <span>Sidebar</span>
        </div>

        <nav className="sidebar-nav">
          <a href="#andromeda">AndromedaOS</a>
          <a href="#sobre">Sobre o projeto</a>
          <a href="#info">Info</a>
          <a href="#links">Links</a>
        </nav>

        <button className="donate-button">Donate</button>
      </div>
    </aside>
  )
}