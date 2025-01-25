import React from "react";

function SkeletonCourseCard() {
  return (
    <div className="col-12 col-md-3 my-md-4 my-2 col-lg-3 col-xl-3 col-xxl-4">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card shadow course-card">
          {/* Skeleton for image */}
          <div className="card-img-top course-card bg-light placeholder-glow">
            <div
              className="placeholder col-12"
              style={{ height: "200px" }}
            ></div>
          </div>
          <div className="card-body">
            {/* Skeleton for title */}
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            {/* Skeleton for text */}
            <p className="placeholder-glow">
              <span className="placeholder col-3"></span>
              <span className="placeholder col-4"></span>
            </p>
            <div className="row">
              {/* Skeleton for button */}
              <div className="col-12 placeholder-glow">
                <span className="btn btn-success disabled placeholder  col-6"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCourseCard;
