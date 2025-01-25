import React from "react";
import D1 from "../../../assets/images/DeveloperLogos/IMG_20240717_215350_439.jpg";
import DevelopersData from "./Developers.js";

function DevelopersDisplay() {
  const data = DevelopersData;
  return (
    <div className="container my-md-5">
      <div className="row justify-content-center">
        {data.map((developer, index) => (
          <div key={index} className="col-12 col-md-4">
            <div class="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="my-3 mx-3">
                    <img
                      src={developer.imgUrl}
                      className="rounded-circle align-items-center"
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div clasName="card-body">
                    <div className="my-4 mx-auto">
                      <h5 clasName=" display-3 text-dys">{developer.name}</h5>
                      <p clasName="card-text">{developer.role}</p>
                      <p clasName="card-text">
                        <div class="text-primary">
                          {/* Last updated 3 mins ago */}
                          <a
                            href={
                              developer.linkedInUrl !== ""
                                ? "/"
                                : developer.linkedInUrl
                            }
                          >
                            Linked in <i class="bi bi-linkedin"></i>
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevelopersDisplay;
