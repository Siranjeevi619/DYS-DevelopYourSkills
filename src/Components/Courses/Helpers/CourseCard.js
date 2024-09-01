import React from "react";
import "../../../assets/Style/CarsoualCard.css";
import { useNavigate } from "react-router";

// Skeleton version of the CourseCard
import SkeletonCourseCard from "./SkeletonCourseCard.js";

// Main CourseCard component
function CourseCard(props) {
  const navigate = useNavigate();

  // If the content is loading, render the SkeletonCourseCard instead
  if (props.isLoading) {
    return <SkeletonCourseCard />;
  }

  function handleCoursePage(id) {
    navigate("/course-view");
    window.open(id);
    // console.log(id);
  }

  return (
    <div className="col-12 col-md-3 my-md-4 my-2 col-lg-3 col-xl-3 col-xxl-4">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow course-card">
          <img
            src={props.CourseThumbnail}
            className="card-img-top course-card-img h-auto"
            alt="Course Thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{props.CourseName}</h5>
            <p>
              by<span className="text-primary h5"> {props.Youtuber}</span>
            </p>
            <div className="row">
              <button
                className="btn btn-primary"
                onClick={handleCoursePage}
              >
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
