import React from "react";
import reactImage from "../../../assets/images/Course-img/React-image.png";
import "../../../assets/Style/CourseCard.css";

function CourseCard() {
  return (
    <div className="container">
      <div className="card shadow  course-card">
        <img src={reactImage} className="card-img-top course-card-img" alt="reactImage" />
        <div className="card-body">
          <h5 className="card-title">React - Basics</h5>
          <p>
            by<span className="text-primary h5"> CodeEvolution</span>
          </p>
          <div className="row">
            <button className="btn btn-primary">View course</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
