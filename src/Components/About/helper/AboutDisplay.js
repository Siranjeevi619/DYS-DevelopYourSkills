import React from "react";
import TeamWorkImage from "../../../assets/Icons/TeamWork.svg";
import "../../../assets/Style/AboutDisplay.css";

function AboutDisplay() {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src={TeamWorkImage} className="img-fluid " />
            </div>
          </div>
          <div className="col-md-6 col-12 justify-text">
            <div className="bg-gray p-md-4 p-2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDisplay;
