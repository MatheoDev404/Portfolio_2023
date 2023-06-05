import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <p className="Header__logo">
        Mathéo
        <span> Stunault</span>
      </p>
      <nav className="Header__nav">
        <Link className="Header__nav__link" to="/">
          Accueil
        </Link>
        <Link className="Header__nav__link" to="/projets">
          Projets
        </Link>
        <Link className="Header__nav__link" to="/About">
          A propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
