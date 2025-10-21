import React from "react";
import { Route, Routes } from "react-router-dom";
import LmsLandingPage from "../pages/home";
import CoursesPage from "../pages/course";
import CourseInfoPage from "../pages/courseinfo";

function AppNavigation() {
  return (
    <Routes>
      <Route path="/" element={<LmsLandingPage />}></Route>
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/info/:id" element={<CourseInfoPage />} />
      {/* <Route path="/view/:id" element={<Course}/> */}
    </Routes>
  );
}

export default AppNavigation;
