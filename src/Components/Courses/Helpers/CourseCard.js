import React from "react";
import reactImage from "../../../assets/images/Course-img/React-image.png";
import "../../../assets/Style/CourseCard.css";
import {  useNavigate } from "react-router";

function CourseCard() {
  const navigate = useNavigate();
  const handleCourseView = () => {
    navigate("/course-view");
  };
  return (
    <div className="col-12 col-md-4 my-md-4 my-2 col-lg-3 col-xl-4 col-xxl-4">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow  course-card">
          <img src={reactImage} className="card-img-top course-card-img h-auto" alt="reactImage" />
          <div className="card-body">
            <h5 className="card-title">React - Basics</h5>
            <p>
              by<span className="text-primary h5"> CodeEvolution</span>
            </p>
            <div className="row">
              <button className="btn btn-primary" onClick={handleCourseView}>
                View course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
