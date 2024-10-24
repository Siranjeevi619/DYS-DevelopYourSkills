import React from "react";
import TeamWorkImage from "../../../assets/Icons/TeamWork.svg";
import DiscussionImage from "../../../assets/Icons/DiscussIcon.svg";
import InSyncImage from "../../../assets/Icons/undraw_in_sync_re_jlqd.svg";
import "../../../assets/Style/AboutDisplay.css";
import DevelopersDisplay from "./DevelopersDisplay";

function AboutDisplay() {
  return (
    <>
      <div className="my-md-5 my-3">
        <div className="container">
          <div className="grid row row-gap-3">
            <div className="col-md-6 col-12 justify-text bg-body-tertiary ">
              <div className="bg-gray p-md-4 p-2 bg-body-tertiary">
                <h1 className="display-2">Hello Learners</h1>
                <p className="h5 fw-light">
                  At Dys, we make learning easier and more personalized. We know
                  it can be hard to find quality educational resources, so we’ve
                  created a platform with expert-curated tutorials, personalized
                  learning paths, and tools to help you connect with others. Our
                  goal is to provide everything you need to learn and grow in
                  one place. With AI-driven recommendations, we tailor your
                  learning experience to keep you engaged and moving toward your
                  goals.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={TeamWorkImage}
                  className="img-fluid mt-md-5 my-4 undraw-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-md-5 my-3">
        <div className="container">
          <div className="grid row row-gap-3">
            <div className="col-md-6 col-12">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={InSyncImage}
                  className="img-fluid mt-md-5 my-4 undraw-img"
                />
              </div>
            </div>
            <div className="col-md-6 col-12 justify-text bg-body-tertiary ">
              <div className="bg-gray p-md-4 p-2 bg-body-tertiary">
                <h1 className="display-2">
                  Misson of <span className="text-dys">DYS</span>
                </h1>
                <p className="h5 fw-light">
                  Our mission is to make learning accessible, personalized, and
                  engaging for everyone. By providing high-quality,
                  expert-curated resources and fostering a collaborative
                  community, we aim to empower learners to reach their goals. We
                  believe that learning should be tailored to individual needs,
                  and we use advanced technology to create a customized
                  experience for each user, ensuring they stay motivated and
                  supported throughout their learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-md-5 my-3">
        <div className="text-center display-1">about developers</div>
        <div className="my-md-4 my-2">
          <DevelopersDisplay />
        </div>
      </div>
    </>
  );
}

export default AboutDisplay;
