import React, { Component } from 'react';
import Follow from './Follow';

export default class ArtistInfo extends Component {

  render() {

    const { artistData, followed, handleFollowClick } = this.props;

    const artistImage = artistData.images[1].url;
    const artistGenres = artistData.genres.map((genre, index) => {
      return <div key={index}>{genre.toUpperCase()}</div>
    });

    return (
      <div className="artistInfo">
        <div className="artistInfo-Image" >
          <a href={artistData.external_urls.spotify} target="_blank">
            <img src={artistImage} alt="image of the artist" />
          </a>
          <div className="artistInfo-Labels">
            <div className="artistInfo-Name">{artistData.name}</div>
            <div className="artistInfo-Followers">{artistData.followers.total} Followers</div>
            <div className="artistInfo-Genre">{artistGenres}</div>
          </div>
        </div>
        <Follow handleFollowClick={handleFollowClick} followed={followed}/>
      </div>
    );
  }
}
