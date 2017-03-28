import React from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';

class Listing extends React.Component {

  render() {
    const { id, make, model, picture, rate } = this.props.details;
    return (
      <Link to={`/equipment/${id}`} className="dark-gray fl-ns w-25-ns">
        <figure className="ma2">
          <Image picture={picture} />
          ${rate}
          <figcaption>{make} {model}</figcaption>
        </figure>
      </Link>
    )
  }
}

Listing.propTypes = {
  details: React.PropTypes.object.isRequired
}

export default Listing;
