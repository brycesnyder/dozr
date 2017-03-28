import React from 'react';

const { array } = React.PropTypes;

class ImageGrid extends React.Component {
  render() {
    const images = this.props.links.map((link, key) => {
      return (
        <div key={key} className="fl-ns w-50-ns pa3">
          <img src={`/images/${link}`} />
        </div>
      )
    })
    return (
      <div className="cf">
        {images}
      </div>
    )
  }
};

ImageGrid.propTypes = {
  links: array
}

export default ImageGrid;
