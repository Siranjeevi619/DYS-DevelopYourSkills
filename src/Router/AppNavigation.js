import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Course from "../Components/Courses/Course";
import Footers from "../Components/Footers/Footer";

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
      <Footers />
    </div>
  );
}

export default AppNavigation;
