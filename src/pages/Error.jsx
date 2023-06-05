import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="Error">
      <span className="Error__404">404</span>
      <p className="Error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="Error__link" to="/">
        Retourner à la page d’accueil
      </Link>
    </div>
  )
}

export default Error
