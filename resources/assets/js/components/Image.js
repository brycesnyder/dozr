import React from 'react';

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: ''
    }
  }

  componentDidMount() {
    // check to see if image is on server, if not add noimage placeholder.
    // This is presumably heavy on the server and I would assume there is an alternate to doing a server hit like this
    // @TODO figure out how to return jsx from response?
    fetch(`/images/${this.props.picture}`)
      .then(response => response)
      .then(response => {
        this.setState({
          imageUrl: `/images/${response.ok ? this.props.picture : 'noimage.png'}`
        })
      });
  }

  render() {
    return (
      <img src={this.state.imageUrl} style={{height: 175 + 'px', width: 100 + '%'}} />
    )
  }
}

Image.propTypes = {
  picture: React.PropTypes.string
}

export default Image;
