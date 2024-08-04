import React from "react";
import codevolutionLogo from "../../assets/Icons/Youtuber-icons/codevolution.png";
import "../../assets/Style/CourseView.css";
import CourseExplainationCard from "./helpers/CourseExplainationCard";
import Outcomes from "./helpers/Outcomes";
import { useNavigate } from "react-router";
function CourseView() {
  const navigate = useNavigate();
  const handleViewCourse =() =>{
    navigate("/view-course");
  }
  return (
    <div className="bg-courseview py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-7">
            <div className="justify-content-center justify-content-md-start d-flex align-items-center align-items-md-start">
              <img
                src={codevolutionLogo}
                className="rounded-circle 
             youtube-logo"
              />
            </div>
            <h1 className="display-2 text-center text-md-start ">React - Basics</h1>
            <p className="text-primary h5 text-center text-md-start">Codevolution</p>
            <p className="text-center text-md-start">
              <i className="bi bi-translate h4"></i> : <span className="special-span">English</span>
            </p>
            <p className="justify-text">Use reusable components to render views where data changes over time Organize React projects to create more scalable and maintainable websites and apps Use props to pass data between components. Create dynamic and interactive web pages and apps Use forms to allow users to interact with the app. Build an application in React</p>
            <div className="my-md-4 my-3 text-center text-md-start">
              <button className="btn btn-primary" onClick={handleViewCourse}>
                start course <i className="bi fs-6 bi-play-circle-fill"></i>
              </button>
            </div>
          </div>



          {/* Course-Explaination-card */}
          <div className="col-md-5 col-lg-4 col-12  my-1">
            <div className="d-flex justify-content-center align-items-center">
              <CourseExplainationCard />
            </div>
          </div>
        </div>
      </div>



      {/* outcomes */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Outcomes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseView;
