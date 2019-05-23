import React, { Component } from 'react';
import { Link } from 'gatsby';

import HelmetMeta from '../components/Header/HelmetMeta';
import Header from '../components/Header/Header';
import './global.scss';

class Main extends Component {
  state = {
    spotifyData: null,
  }

  componentDidMount() {
    if (window.fetch) {
      window.fetch('https://api.spotify.com/v1/me/player/currently-playing?market=US', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer BQBl4WnypsKjLHhqufb2DPhDmguaOvejFbmD_jHInw9qsOXdHvjfLuXzls72wJtFlr0cI2iZEJjeZHZDwgEOeZueJzzRMYCrhfCxpWq97bVtJTVn-wbMPk3nvRUN56oRB_bno181HkViHMUikGp2oA',
        },
      }).then(response => response.json())
        .then((data) => {
          this.setState({
            spotifyData: data.item,
          });
        });
    }
  }

  render() {
    return (
      <main className="main-page-content">
        <HelmetMeta pageTitle="Web Development by Damir" />
        <Header />
        <section className="links">
          <Link to="/resume">Resume</Link>
          <a href="https://github.com/damdeez">Github</a>
          <a href="https://twitter.com/damdeez">Twitter</a>
          <a href="https://www.linkedin.com/in/damirharambasic/">LinkedIn</a>
          <a href="mailto:damir.hara@gmail.com">Contact Me</a>
          {/* console.info('this.state.spotifyData', this.state.spotifyData) */}
        </section>
        <footer>{this.state.spotifyData
          && (
            <div className="now-playing">
              <span className="album-cover">
                {this.state.spotifyData.album
                  && this.state.spotifyData.album.images
                  && <img alt="album-cover" src={this.state.spotifyData.album.images.find(image => image.width === 64).url} />
                }
              </span>
              <span>#NowListening: </span>
              {this.state.spotifyData.artists
                && this.state.spotifyData.artists.map(artist => (
                  <span className="artist" key={artist.name}>{artist.name}</span>
                ))} - <span className="song-name">{this.state.spotifyData.name}</span>
            </div>
          )}
        </footer>
      </main>
    );
  }
}

export default Main;
