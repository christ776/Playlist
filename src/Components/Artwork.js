import React, { Component } from 'react';
import Controls from './Controls';

class Artwork extends Component {
  render() {

  return (
    <div className="Artwork" style={{ backgroundImage: 'url(' + this.props.artwork + ')' }}>
            <Controls onClick={this.props.onClick} playing={this.props.playing} />
    </div>
  );
  }
}

export default Artwork;

Artwork.propTypes = {
  onClick: React.PropTypes.function,
  playing: React.PropTypes.bool,
  artwork: React.PropTypes.string
}
