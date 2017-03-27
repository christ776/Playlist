
import React, { Component } from 'react';
import Artwork from './Components/Artwork';
import TrackList from './Components/TrackList';
import './../styles/main.scss';

// Data
let data = {
    title: 'How To Be A Human Being',
    artist: 'Glass Animals',
    artwork: 'http://dhgkpqsiufwl2.cloudfront.net/media/ArticleSharedImage/imageFull/.fDcKYrUV/ArticleSharedImage-63604.jpg',
    tracks: [
        {
            id: 1,
            title: 'Life Itself',
            duration: '4:41'
        },
        {
            id: 2,
            title: 'Youth',
            duration: '3:51'
        },
        {
            id: 3,
            title: 'Season 2 Episode 3',
            duration: '4:04'
        },
        {
            id: 4,
            title: 'Pork Soda',
            duration: '4:14'
        },
        {
            id: 5,
            title: 'Mama\'s Gun',
            duration: '4:27'
        },
        {
            id: 6,
            title: 'Cane Shuga',
            duration: '3:17'
        },
        {
            id: 7,
            title: '[Premade Sandwiches]',
            duration: '0:36'
        },
        {
            id: 8,
            title: 'The Other Side of Paradise',
            duration: '5:21'
        },
        {
            id: 9,
            title: 'Take A Slice',
            duration: '3:50'
        },
        {
            id: 10,
            title: 'Poplar St',
            duration: '4:23'
        },
        {
            id: 11,
            title: 'Agnes',
            duration: '4:32'
        }
    ]
};

export default class App extends Component {

  constructor() {
    super();
    this.state = {
            playing: false,
            currentTrack: [
                {
                    id: 0,
                    title: 'Bla',
                    duration: '0:00'
                }
            ]
        };
  }

  render() {
    return (
      <div className="App">
              <Artwork onClick={this.handleClick} playing={false} artwork={this.props.artwork}/>
              <TrackList tracks={this.props.tracks} />
        </div>
    );
  }
}

App.propTypes = {
  artwork: React.PropTypes.string,
  tracks: React.PropTypes.array
}

App.defaultProps =  data
