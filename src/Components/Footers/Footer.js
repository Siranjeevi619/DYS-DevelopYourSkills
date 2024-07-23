import React from "react";
import "./Footer.css";

function Footers() {
  return (
    <div className="footers">
      <div className="container">
        <div className="row py-5 pb-2 text-white">
          <div className="col-sm-3 col-md-6 col-lg-3 ">
            <a className="text-decoration-none text-white text-center text-md-start h3 paragraph" href="index.html">
              D<span className="text-primary ">Y</span>S
            </a>
            <p>Coimbatore, Tamil Nadu</p>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3">
            <p className="h5 mb-3 text-decoration-none text-white paragraph text-center text-md-start">AI Courses</p>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                Prompt Engineering
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                Machine Learning Specialization
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                AI for Everyone
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                Generative AI
              </a>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3">
            <p className="h5 mb-3 paragraph text-center text-md-start">Popular Programs</p>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                Google Data Analytics Certificate
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                Google Project Management Certificate
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                IBM Data Science Certificate
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="footershref text-decoration-none">
                UI/UX Design Specialization
              </a>
            </div>
          </div>
          <div className="col-sm-3 col-md-6 col-lg-3">
            <p className="h5 mb-3 paragraph text-center text-md-start">Social Media</p>
            <div className="mb-2">
              <a href="#" className="social socialinstagram text-decoration-none">
                <i className="fa-brands fa-instagram icons"></i> Instagram
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="social sociallinkedin text-decoration-none">
                <i className="fa-brands fa-linkedin icons"></i> LinkedIn
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="social socialtwitter text-decoration-none">
                <i className="fa-brands fa-square-twitter icons"></i> Twitter
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="social socialfacebook text-decoration-none">
                <i className="fa-brands fa-facebook icons"></i> Facebook
              </a>
            </div>
          </div>
          <div className="col-sm-12 pt-4">
            <p className="text-white text-center">Copyright - All rights reserved &copy; 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
