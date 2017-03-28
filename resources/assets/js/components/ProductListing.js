import React from 'react';
import { Link } from 'react-router-dom';

import Listing from './Listing';
import Header from './Header';

class ProductListing extends React.Component {
  constructor() {
    super();
    this.state = {
      equipment: []
    }
  }

  componentDidMount() {
    fetch('/api/equipment')
      .then(data => data.json())
      .then(data => {
        this.setState({
          equipment: data
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="cf">
          {
            Object
              .keys(this.state.equipment)
              .map(key =>
                <Listing key={key} index={key} details={this.state.equipment[key]} />
              )
          }
        </div>
      </div>
    )
  }
}

export default ProductListing;
