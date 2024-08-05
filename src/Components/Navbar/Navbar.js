import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/Style/Navbar.css";

function Navbar() {
  const Navigate = useNavigate();
  const handleCoursePage = () => {
    Navigate("/Course");
  };
  const handleHomePage = () => {
    Navigate("/");
  };
  const handleAboutPage = () => {
    Navigate("/About");
  };
  const handleContactPage = () => {
    Navigate("/Contact");
  };
  const handleBlur = (event) => {
    event.target.blur();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-style">
        <div className="container">
          <NavLink className="navbar-brand mx-auto" to="/">
            <span className="fs-4 fw-bold text-center text-white mx-auto">DYS.edu</span>
          </NavLink>
          <button className="navbar-toggler custom-toggler btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={handleBlur}>
            <span className="navbar-toggler-icon custom-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-6 d-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-lg-2">
                <NavLink exact className="nav-link  footershref text-white" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/Course">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-lg-2 footershref">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleHomePage}>
              <NavLink className="nav-link" aria-current="page" to="/" data-bs-dismiss="offcanvas">
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleCoursePage}>
              <NavLink className="nav-link" to="/Course" data-bs-dismiss="offcanvas">
                Courses
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleAboutPage}>
              <NavLink className="nav-link" to="/About" data-bs-dismiss="offcanvas">
                About
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleContactPage}>
              <NavLink className="nav-link" to="/Contact" data-bs-dismiss="offcanvas">
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
