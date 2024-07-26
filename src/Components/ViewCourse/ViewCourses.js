import React from "react";
import "../../assets/Style/ViewCourses.css";
import codevolution from "../../assets/Icons/Youtuber-icons/codevolution.png";


function ViewCourses() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="responsive-iframe-container">
            <iframe src="https://www.youtube.com/embed/yA1saJp0c30?si=LmtnrWVyhqsOsed8" allowFullScreen controls title="Course Video"></iframe>
          </div>
          <h3 className="my-md-3 my-3 fs-5">Next.js 14 Tutorial - 50 - Server and Client Components</h3>
          <div className="content-creater d-flex justify-content-md-start gap-2 align-items-center">
            <img src={codevolution} className="rounded-circle img-fluid" /> <h4>codevolution</h4>
            <div className="justify-content-end d-flex  ms-auto">
              <button className="btn btn-primary btn-sm rounded-5" >
                Like <i className="bi bi-hand-thumbs-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourses;
