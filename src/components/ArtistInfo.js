import React, { Component } from 'react';
import Follow from '../components/Follow';

export default class ArtistInfo extends Component {

  constructor() {
    super()
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }

  handleFollowClick(e) {

    const { follow } = this.props;

    console.log('hello');
    follow();
  }

  render() {

    const { artistData, followed } = this.props;

    const artistImage = artistData.images[1].url;
    const artistGenres = artistData.genres.map((genre, index) => {
      return <div key={index}>{genre}</div>
    });

    return (
      <div className="artistInfo">
        <div className="artistInfo-Image" >
          <a href={artistData.external_urls.spotify} target="_blank">
            <img src={artistImage} alt="image of the artist" />
          </a>
          <div className="artistInfo-Labels">
            <div className="artistInfo-Name">Artist:  {artistData.name}</div>
            <div className="artistInfo-Genre">{artistGenres}</div>
            <div className="artistInfo-Followers">{artistData.followers.total} Followers</div>
          </div>
        </div>
        <Follow handleFollowClick={this.handleFollowClick} followed={followed}/>
      </div>
    );
  }
}

// ArtistInfo.propTypes = {
//   artistData: React.PropTypes.object.isRequired,
//   followed: React.PropTypes.bool.isRequired,
//   follow: React.PropTypes.func.isRequired,
//   handleFollowClick: React.PropTypes.func.isRequired
// };
