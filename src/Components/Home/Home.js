import React from "react";
import Typed from "typed.js";
import "../../assets/Style/InitialStyle.css";
import "../../assets/Style/Home.css";
import HTMLLogo from "../../assets/Icons/html.png";
import studyLogo from "../../assets/Icons/study-icon.svg";
import { useNavigate } from "react-router";

function Home() {
  const el = React.useRef(null);
  const Navigate = useNavigate();
  const handleCoursePage = () => {
    Navigate("/Course");
  };
  const handleAboutPage = () => {
    Navigate("/About");
  };
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["yourself", "Tech skill", "your skill"],
      typeSpeed: 180,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="my-3 my-lg-5"></div>
        {/* TypedJS section */}
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-2">
            <h1 className="text-center display-1 text-md-start">
              <span className="fw-light ">Develop </span>
              <span ref={el} className="text-dys" />
            </h1>
            <div className="my-3  text-break">
              <h3 className="fs-2 text-center text-md-start">
                Knowledge is <span className="text-dys">Power</span>
              </h3>
              <div className="my-3 ">
                <p className="fs-4 text-center text-md-start ">Welcome To our website, Education is the most powerful weapon which you can use to change the world, Education is the passport to the future, for tomorrow belongs to those who prepare for it today</p>
              </div>
            </div>
            <div className="my-4">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start">
                <button className="btn btn-primary " onClick={handleCoursePage}>
                  view course <i className="bi bi-book"></i>
                </button>
                <button className="btn  btn-outline-primary ms-3" onClick={handleAboutPage}>
                  Explore <i className="bi bi-globe-americas"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="mt-1">
              <div className="d-flex align-items-center justify-content-center">
                <img src={HTMLLogo} className="img-fluid typed-section" alt="HTML-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* explore page content */}
      <div className="bg-light">
        <div className="my-lg-3 my-2">
          <div className="container">
            <div className="">
              <div className="row ">
                <div className="col-12 my-lg-5 my-2 col-md-6">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={studyLogo} className="img-fluid explore-page-image" />
                  </div>
                </div>
                <div className="col-12 my-lg-5 my-2 col-md-6">
                  <h1 className="display-3 fw-light ">
                    Develop <span className="text-primary">Your</span> Skill
                    <a className="linked-icon ms-1 h1" href="/">
                      <i className="bi bi-link-45deg "></i>
                    </a>
                  </h1>
                  <p className="fs-4">
                    At D<span className="text-primary">Y</span>S, we are committed to providing the best free videos for learning technical skills. Whether you're looking to advance your career, switch fields, or simply expand your knowledge, our platform is here to support you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
