import React from "react";
import { useLocation, useNavigate } from "react-router";
import "../../assets/Style/CourseView.css";
import CourseExplainationCard from "./helpers/CourseExplainationCard";
import Outcomes from "./helpers/Outcomes";

function CourseView() {
  const location = useLocation();
  const {
    courseDescription = "",
    courseDuration = "",
    courseLanguage = "",
    courseName = "",
    courseThumbnail = "",
    courseTutorIcon = "",
    courseUniqueId = "",
    certifications = [],
    documents = [],
    outcomes = [],
    tags = [],
    tutorName = "",
    videoLink = [],
    videoTitle = [],
  } = location.state || {};
  console.log(location.state);

  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate("/ViewCourses", {
      state: {
        courseName,
        courseDescription,
        courseDuration,
        courseLanguage,
        courseTutorIcon,
        videoLink,
        videoTitle,
        tutorName,
        documents,
        courseThumbnail,
        certifications,
      },
    });
  };

  return (
    <div className="bg-courseview py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-7">
            <div className="justify-content-center justify-content-md-start d-flex align-items-center align-items-md-start">
              <img
                src={`http://localhost:6969${courseTutorIcon}`}
                className="rounded-circle youtube-logo"
                alt="Tutor Icon"
              />
            </div>
            <h1 className="display-2 text-center text-md-start">
              {courseName}
            </h1>
            <p className="text-primary h5 text-center text-md-start">
              {tutorName}
            </p>
            <p className="text-center text-md-start">
              <i className="bi bi-translate h4"></i>:{" "}
              <span className="special-span">{courseLanguage}</span>
            </p>
            <p className="justify-text">{courseDescription}</p>
            <div className="my-md-4 my-3 text-center text-md-start">
              <button className="btn btn-primary" onClick={handleViewCourse}>
                Start Course <i className="bi fs-6 bi-play-circle-fill"></i>
              </button>
            </div>
          </div>

          <div className="col-md-5 col-lg-4 col-12 my-1">
            <div className="d-flex justify-content-center align-items-center">
              <CourseExplainationCard
                courseName={courseName}
                tags={tags}
                courseDuration={courseDuration}
                courseLevel="Beginner Level"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Outcomes
          outcomes={outcomes}
          documents={documents}
          certifications={certifications}
          videoLinks={videoTitle}
        />
      </div>
    </div>
  );
}

export default CourseView;
