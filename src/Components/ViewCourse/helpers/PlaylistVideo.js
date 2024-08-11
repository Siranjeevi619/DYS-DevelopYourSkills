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
        <p>Codevolution</p>
      </div>
    </div>
  );
};

export default PlaylistVideo;

