import React from "react";
import Typed from "typed.js";
import "../../assets/Style/InitialStyle.css";
import "../../assets/Style/Home.css";
import HTMLLogo from "../../assets/Icons/html.png";
import studyLogo from "../../assets/Icons/study-icon.svg";
import { useNavigate } from "react-router";
import CarouselEffectPassCard from "./helpers/CarsoualEffectPassCard";
import CourseSlider from "./helpers/CourseSlider";
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
          <div className="col-12 col-lg-6 order-lg-1 order-2">
            <h1 className="text-center display-1 text-md-start">
              <span className="fw-light ">Develop </span>
              <span ref={el} className="text-dys" />
            </h1>
            <div className="my-3  text-break">
              <h3 className="fs-2 text-center text-md-start">
                Knowledge is <span className="text-dys">Power</span>
              </h3>
              <div className="my-3 ">
                <p className="fs-4 justify-text ">Education is the cornerstone of personal and societal growth, opening doors to opportunities and fostering critical thinking. It empowers individuals to explore new ideas, solve complex problems, and contribute meaningfully to their communities. Through education, we gain the knowledge and skills necessary to navigate an ever-changing world. Lifelong learning ensures that we continue to grow and adapt, staying curious and engaged. In essence, education is a lifelong journey that shapes our minds and future.</p>
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
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="my-md-5 my-3">
              <CarouselEffectPassCard />
            </div>
          </div>
        </div>
      </div>

      {/* learn courses display */}
      
     {/* <div className="my-md-5 my-3">
      <div className="container">
      <CourseSlider />
      </div>
     </div> */}

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
