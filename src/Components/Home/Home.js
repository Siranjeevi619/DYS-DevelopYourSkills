import React from "react";
import Typed from "typed.js";
import "../../assets/Style/InitialStyle.css";
import "../../assets/Style/Home.css";
import HTMLLogo from "../../assets/Icons/html.png";

function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["yourself", "Tech skill", "your skills"],
      typeSpeed: 180,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="container">
      <div className="mt-3 mt-lg-5"></div>
      {/* TypedJS section */}
      <div className="row">
        <div className="col-12 col-md-6">
          <h1 className="text-center display-1 text-md-start">
            <span className="fw-light ">Develop </span>
            <span ref={el} className="text-primary  " />
          </h1>
          <div className="mt-3  text-break">
            <h3 className="fs-2 text-center text-md-start">
              Knowledge is <span className="text-dys">Power</span>
            </h3>
            <div className="mt-3 ">
              <p className="fs-4 text-center text-md-start ">Welcome To our website, Education is the most powerful weapon which you can use to change the world, Education is the passport to the future, for tomorrow belongs to those who prepare for it today</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start">
              <button className="btn btn-primary ">
                view course <i className="bi bi-book"></i>
              </button>
              <button className="btn  btn-outline-primary ms-3">
                Explore <i className="bi bi-map"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="">
            <img src={HTMLLogo} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
