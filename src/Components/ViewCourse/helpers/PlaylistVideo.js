import React from 'react'
import "../../../assets/Style/PlaylistVideo.css";
import reactPlaylistThumbnail from '../../../assets/images/Course-img/React-image.png'
import "../../../assets/Style/PlaylistVideo.css";

const PlaylistVideo = () => {
  return (
    <div className="carbon-ads">
      <div className="carbon-ads-thumbnail">
        <img src={reactPlaylistThumbnail} alt="reactPlaylistThumbnail" />
      </div>
      <div className="carbon-ads-details">
        <h4>React Basics</h4>
        <p>Your ad description goes here. It should be brief and to the point.</p>
      </div>
    </div>
  );
};

export default PlaylistVideo;

