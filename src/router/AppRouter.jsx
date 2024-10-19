import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AddCourse from "../pages/addcourse/AddCourse";
import Courses from "../pages/courses/Courses";
import Dashboard from "../pages/dashboard/Dashboard";
import Navbar from "../components/Navbar";

function AppRouter() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addcourse" element={<AddCourse />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
