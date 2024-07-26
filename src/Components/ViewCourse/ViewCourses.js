import React, { useState } from "react";
import "../../assets/Style/ViewCourses.css";
import codevolution from "../../assets/Icons/Youtuber-icons/codevolution.png";
import PlaylistVideo from "./helpers/PlaylistVideo";

function ViewCourses() {
  const [notes, setNotes] = useState("");
  const handleNotes = (event) => {
    event.preventDefault();
    console.log(notes);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="responsive-iframe-container">
            <iframe src="https://www.youtube.com/embed/yA1saJp0c30?si=fxKHV6GL7CndEJ3j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <h3 className="my-md-3 my-3 fs-5">Next.js 14 Tutorial - 50 - Server and Client Components</h3>
          <div className="content-creater d-flex justify-content-md-start gap-2 align-items-center">
            <img src={codevolution} className="rounded-circle img-fluid" alt="youtuber-icon" /> <h4>codevolution</h4>
            <div className="justify-content-end d-flex  ms-auto">
              <button className="btn btn-primary btn-sm">
                <a data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Default tooltip">
                  <i className="bi bi-hand-thumbs-up"></i>
                </a>
              </button>
            </div>
          </div>
          <form onSubmit={handleNotes} className="my-md-2 my-3 my-lg-3">
            <textarea
              class=" custom-textarea fixed-height"
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
              placeholder="Notes here"
              id="floatingTextarea"
            ></textarea>
            <button className="btn btn-primary my-3">save notes</button>
          </form>
        </div>
        <div className="col-12 col-md-5">
          <h4>Upcoming </h4>
          <PlaylistVideo />
          <PlaylistVideo />
          <PlaylistVideo />
          <PlaylistVideo />
          <PlaylistVideo />
        </div>
      </div>
    </div>
  );
}

export default ViewCourses;
