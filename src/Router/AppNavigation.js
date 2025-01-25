import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom"; // Ensure you're importing from 'react-router-dom'
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Course from "../Components/Courses/Course";
import Footers from "../Components/Footers/Footer";
import CourseView from "../Components/CourseView/CourseView";
import ViewCourses from "../Components/ViewCourse/ViewCourses";
import SenseiPage from "../Components/Sensei/SenseiPage";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/courseview" element={<CourseView />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ViewCourses" element={<ViewCourses />}></Route>
        <Route path="/sensei" element={<SenseiPage />}></Route>
      </Routes>
      <Footers />
    </div>
  );
}

export default AppNavigation;
