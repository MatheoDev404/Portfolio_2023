import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Tag from '../components/Tag'

function Card({ id, picture, title, tags, description }) {
  return (
    <Link to={{ pathname: `/projet/${id}` }} className="Card">
      <img className="Card__img" src={picture} alt="aperçu du site" />
      <div className="Card__content">
        <span className="Card__content__title">{title}</span>
        <ul className="Card__content__tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </ul>
        <p className="Card__content__description">{description}</p>
      </div>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  picture: '',
  tags: [],
  description: '',
}

export default Card
