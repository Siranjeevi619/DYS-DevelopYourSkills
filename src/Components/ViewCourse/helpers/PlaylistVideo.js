import React from "react";
import "../../../assets/Style/PlaylistVideo.css";
import reactPlaylistThumbnail from "../../../assets/images/Course-img/ReactBasics.png";

const PlaylistVideo = ({ title, youtuber, onVideoSelect }) => {
  return (
    <div className="carbon-ads" onClick={onVideoSelect}>
      <div className="carbon-ads-thumbnail">
        <img src={reactPlaylistThumbnail} alt="reactPlaylistThumbnail" />
      </div>
      <div className="carbon-ads-details">
        <h4>{title}</h4>
        <p>{youtuber}</p>
      </div>
    </div>
  );
};

export default PlaylistVideo;
