import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <p className="Header__container__logo">
          Mathéo
          <span> Stunault</span>
        </p>
        <nav className="Header__container__nav">
          <Link className="Header__container__nav__link" to="/">
            Accueil
          </Link>
          <Link className="Header__container__nav__link" to="/projets">
            Projets
          </Link>
          <Link className="Header__container__nav__link" to="/About">
            A propos
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
