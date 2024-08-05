import React from "react";
import "../../../assets/Style/CourseExplainationCard.css";

function CourseExplainationCard() {
  return (
    <div className="my-md-4 my-3">
      <div className="card shadow p-2 course-card">
        <div className="card-body">
          <h4 className="card-title">Course</h4>
          <div className=" card-subtitle">
            <div className="d-flex justify-content-start  gap-2 align-items-center basic-span-items">
              <span className="special-span">fundamental</span>
              <span className="special-span">basics</span>
              <span className="special-span">fundamental</span>
              <span className="special-span">basics</span>
              <span className="special-span">fundamental</span>
              <span className="special-span">fundamental</span>
              <span className="special-span">basics</span>
            </div>
            <hr className="custom-hr" />
            <h4 className="h4">Beginner Level</h4>
            <p className="text-muted text-subtitle">Recommended experience</p>
            <h5>30 hours</h5>
            <hr className="custom-hr" />
            <a className="text-primary text-decoration-none h5">course modules</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseExplainationCard;
