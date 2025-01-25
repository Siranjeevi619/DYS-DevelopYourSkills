import React from "react";
import "../../../assets/Style/CarsoualCard.css";
import { useNavigate } from "react-router";
import SkeletonCourseCard from "./SkeletonCourseCard.js";

function CourseCard(props) {
  const navigate = useNavigate();

  if (props.isLoading) {
    return <SkeletonCourseCard />;
  }

  function handleCoursePage() {
    navigate("/courseview", {
      state: {
        courseDescription: props.courseDescription,
        courseDuration: props.courseDuration,
        courseLanguage: props.courseLanguage,
        courseName: props.courseName,
        courseThumbnail: props.courseThumbnail,
        courseTutorIcon: props.courseTutorIcon,
        courseUniqueId: props.courseUniqueId,
        certifications: props.courseCertification,
        documents: props.courseDocuments,
        outcomes: props.courseOutcomes,
        tags: props.courseTags,
        tutorName: props.tutorName,
        videoLink: props.courseLink,
        videoTitle: props.courseTitle,
        id: props.courseId,
      },
    });
  }

  return (
    <div className="col-12 col-md-3 my-md-4 my-2 col-lg-3 col-xl-3 col-xxl-4">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow course-card">
          <img
            src={`http://localhost:6969${props.courseThumbnail}`}
            className="card-img-top course-card-img h-auto"
            alt="Course Thumbnail"
          />
          <div className="card-body">
            <h5 className="card-title">{props.courseName}</h5>
            <p>
              by <span className="text-primary h5"> {props.tutorName}</span>
            </p>
            <div className="row">
              <button className="btn btn-primary" onClick={handleCoursePage}>
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
