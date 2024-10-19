import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Ensure NavLink is imported
import "../assets/styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const handleBlur = (event) => {
    event.target.blur();
  };

  const handleHomePage = () => {
    navigate("/");
  };

  const handleCoursePage = () => {
    navigate("/courses");
  };

  const handleAboutPage = () => {
    navigate("/addcourse");
  };

  const handleContactPage = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark navbar-style bg-black">
        <div className="container">
          <NavLink className="navbar-brand mx-auto mx-md-0" to="/">
            <div className="ms-5 ms-md-0 ">
              <span className="fs-4 fw-bold text-center text-white navbar-title">
                DYS<sup className="fw-light">admin</sup>
              </span>
            </div>
          </NavLink>
          <button
            className="navbar-toggler custom-toggler btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            onClick={handleBlur}
          >
            <span className="navbar-toggler-icon custom-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fs-6 d-none d-lg-block"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-lg-2">
                <NavLink
                  className="nav-link footershref text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/addcourse">
                  Add Course
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/"
                data-bs-dismiss="offcanvas"
                onClick={handleHomePage}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                data-bs-dismiss="offcanvas"
                onClick={handleCoursePage}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                data-bs-dismiss="offcanvas"
                onClick={handleAboutPage}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                data-bs-dismiss="offcanvas"
                onClick={handleContactPage}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
