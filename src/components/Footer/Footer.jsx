import React, { Component, Fragment } from 'react';

import './footer.scss';

class Footer extends Component {
  state = {
    spotifyData: null,
  }

  componentDidMount() {
    if (window.fetch) {
      window.fetch('//ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=450b8037e3670e92714d68ea8dd86f1e&limit=1&format=json', {
        method: 'GET',
      }).then(response => response.json())
        .then((data) => {
          const spotifyData = data.recenttracks.track[0];
          this.setState({
            spotifyData,
            loadingSpotifyData: false,
          });
        });
    }
  }

  render() {
    return (
      <footer className="footer">
        <div className="now-playing">
          {this.state.spotifyData && (
            <Fragment>
              {this.state.spotifyData.image
              && (
                <span className="album-cover">
                  <img alt="album-cover" src={this.state.spotifyData.image.find(image => image.size === 'small')['#text']} />
                </span>
              )}
              <span>#NowListening: </span>
              {this.state.spotifyData.artist
                && <span className="artist">{this.state.spotifyData.artist['#text']}</span>
              }
              {this.state.spotifyData && <span className="song-name"> - {this.state.spotifyData.name}</span>}
            </Fragment>
          )}
        </div>
      </footer>
    );
  }
}

export default Footer;
