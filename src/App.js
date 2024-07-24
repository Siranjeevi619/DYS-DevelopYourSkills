// import CourseCard from "./Components/Courses/Helpers/CourseCard";
import AppNavigation from "./Router/AppNavigation";
import React from "react";
import CourseView from "./Components/CourseView/CourseView";
import "../src/assets/Style/InitialStyle.css";
import CourseExplainationCard from "./Components/CourseView/helpers/CourseExplainationCard";
function App() {
  return (
    <>
      {/* <AppNavigation />
      <CourseCard /> */}
      <CourseView />
      {/* <CourseExplainationCard /> */}
    </>
  );
}

export default App;
