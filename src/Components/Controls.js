import React, { Component } from 'react';

class Controls extends Component {

  render() {

    var playpause = <i id="pause" onClick={this.props.onClick} className="fa fa-fw fa-pause"></i>;

    return (

        <div className="Controls">
            <i className="fa fa-fw fa-fast-backward"></i>
            {playpause}
            <i className="fa fa-fw fa-fast-forward"></i>
        </div>
    );
  }
}

Controls.propTypes = {
  onClick: React.PropTypes.function
}

export default Controls;
