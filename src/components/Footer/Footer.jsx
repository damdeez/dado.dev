import React, { Fragment, useState, useEffect } from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    if (window.fetch) {
      window.fetch('//ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=450b8037e3670e92714d68ea8dd86f1e&limit=1&format=json', {
        method: 'GET',
      }).then((response) => response.json())
        .then((data) => {
          const spotifyDataRecent = data.recenttracks && data.recenttracks.track[0];
          setSpotifyData(spotifyDataRecent);
        });
    }
  }, []);

  return (
    <footer className="footer">
      <div className={styles.nowPlaying}>
        {spotifyData && (
          <Fragment>
            {spotifyData.image
            && (
              <span className={styles.albumCover}>
                <img alt="album-cover" src={spotifyData.image.find((image) => image.size === 'medium')['#text']} />
              </span>
            )}
            <span className={styles.nowListening}>#NowListening: </span>
            {spotifyData.artist
              && <span className={styles.artist}>{spotifyData.artist['#text']}</span>}
            {spotifyData.name && <span className={styles.songName}> - {spotifyData.name}</span>}
          </Fragment>
        )}
      </div>
    </footer>
  );
};

export default Footer;
