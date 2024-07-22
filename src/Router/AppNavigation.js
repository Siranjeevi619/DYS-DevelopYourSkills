import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Course from "../Components/Courses/Course";

function AppNavigation() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Course" element={<Course />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default AppNavigation;
