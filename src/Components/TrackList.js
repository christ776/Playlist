import React, { Component } from 'react';

export default class TrackList extends Component {

render() {

  let tracks = [];
  if (this.props.tracks) {
    tracks =  this.props.tracks.map (track => {
    return (
        <li key={track.id}>
            <div className="number">{track.id}</div>
            <div className="title">{track.title}</div>
            <div className="duration">{track.duration}</div>
        </li>
    );
  });
}

  return (
      <ul className="TrackList">
          {tracks}
      </ul>
  );
  }
}
