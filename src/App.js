import AppNavigation from "./Router/AppNavigation";
import React from "react";
import "../src/assets/Style/InitialStyle.css";
import SearchBar from "./Components/Courses/Helpers/SearchBar";
import Contact from "./Components/Contact/Contact";
import CarsoualEffect from "./Components/Home/helpers/CarsoualEffect";
import CourseSlider from "./Components/Home/helpers/CourseSlider";
import DeveloperDisplay from "./Components/Contact/helpers/DeveloperDisplay";
import Developers from "./Components/Contact/helpers/Developers";

function App() {
  return (
    <>
      {/* <Developers /> */}
      {/* <DeveloperDisplay /> */}
      {/* <SearchBar  /> */}
      <AppNavigation /> 
      {/* <CourseSlider /> */}
      {/* <CarsoualEffect /> */}
      {/* <Contact /> */}
      {/* <CourseCard /> */}
      {/*  <CourseView /> */}
      {/* <CourseExplainationCard /> */}
      {/* <ViewCourses /> */}
      {/* <AboutDisplay /> */}
      {/* <TestTool /> */}
      {/* <PopupModal /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
