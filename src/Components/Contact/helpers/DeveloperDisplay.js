import React from "react";
import "../../../assets/Style/DeveloperDisplay.css";

function DeveloperDisplay(props) {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div
            className="card mb-3 p-3 border-1 shadow"
            style={{ maxWidth: "25rem" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <div className="justify-content-center mt-3">
                  <img
                    src={props.logo}
                    className="img-fluid developer-logo shadow-sm  rounded-circle"
                    alt={props.name}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{props.name}</h4>
                  <h5 className="text-dys">{props.role}</h5>
                  <a class="icon-link icon-link-hover" href="#">
                    Portfolio
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-right text-primary"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                      />
                    </svg>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperDisplay;
