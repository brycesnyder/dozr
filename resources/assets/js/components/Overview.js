import React from 'react';

import Image from './Image';
import Header from './Header';

class Overview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    fetch(`/api/equipment/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          data
        });
      });
  }

  render() {
    const { id, make, model, picture, rate } = this.state.data;
    return (
      <div>
        <Header />
        <img src={`/images/${picture}`} />
        {rate}
        {make}
        {model}
        <button className="bg-gold">Book Rental</button>
        <button>Purchase</button>
      </div>
    )
  }
}


  //<Image picture={this.state.data.picture}/>

export default Overview;
