import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CourseraNavbar from "./layout/header";
import LmsLandingPage from "./pages/home";
import Footer from "./layout/footer";
import CourseLandingPage from "./pages/course";
function App() {
  return (
    <>
      <CourseraNavbar />
      {/* <LmsLandingPage /> */}
      <CourseLandingPage />
      <Footer />
    </>
  );
}

export default App;
