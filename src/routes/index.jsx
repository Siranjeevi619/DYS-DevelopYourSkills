import React from "react";
import { Route, Routes } from "react-router-dom";
import LmsLandingPage from "../pages/home";
import CoursesPage from "../pages/course";
import CourseInfoPage from "../pages/courseinfo";
import CourseViewPage from "../pages/courseview";

function AppNavigation() {
  return (
    <Routes>
      <Route path="/" element={<LmsLandingPage />}></Route>
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/course/:courseId" element={<CourseInfoPage />} />
      <Route path="/course/view/:courseId" element={<CourseViewPage />} />
    </Routes>
  );
}

export default AppNavigation;
