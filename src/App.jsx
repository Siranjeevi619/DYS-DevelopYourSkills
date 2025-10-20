import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CourseraNavbar from "./layout/header";
import LmsLandingPage from "./pages/home";
function App() {
  return (
    <>
      <CourseraNavbar />
      <LmsLandingPage />
    </>
  );
}

export default App;
