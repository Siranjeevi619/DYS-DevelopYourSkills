import React from "react";
import "../../../assets/Style/PlaylistVideo.css";
import reactPlaylistThumbnail from "../../../assets/images/Course-img/ReactBasics.png";

const PlaylistVideo = ({
  title,
  courseName,
  tutorName,
  onVideoSelect,
  courseThumbnail,
}) => {
  return (
    <div className="carbon-ads" onClick={onVideoSelect}>
      <div className="carbon-ads-thumbnail">
        <img src={courseThumbnail} alt="reactPlaylistThumbnail" />
      </div>
      <div className="carbon-ads-details">
        <h4>{title}</h4>
        <h6>{courseName}</h6>
        <p>{tutorName}</p>
      </div>
    </div>
  );
};

export default PlaylistVideo;
