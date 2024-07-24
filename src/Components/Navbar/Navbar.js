import React from "react";
// import DYSIcon from '../../assets/Icons/dys-white.png'
import { NavLink } from "react-router-dom";
import "../../assets/Style/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand mx-auto" to="/">
          {/* <img src={DYSIcon} height='50px' width='50px' className="img-fluid me-lg-2 me-2 d-md-inline d-none gap-2" /> */}
          <span className=" fs-4 fw-bold text-center text-white mx-auto  ">DYS.edu</span>
        </NavLink>
        <div className="collapse navbar-collapse fs-6" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-lg-2">
              <NavLink className="nav-link active footershref text-white" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-lg-2 footershref">
              <NavLink className="nav-link " to="/Course">
                Courses
              </NavLink>
            </li>
            <li className="nav-item mx-lg-2 footershref">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item mx-lg-2 footershref">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
