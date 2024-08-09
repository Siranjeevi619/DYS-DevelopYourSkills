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

  const downloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([notes], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "notes.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="container">
      <div className="row py-md-5 py-4">
    
        <div className="col-12 col-md-7">
          <div className="responsive-iframe-container">
            <iframe src="https://www.youtube.com/embed/yA1saJp0c30?si=fxKHV6GL7CndEJ3j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
          <h3 className="my-md-3 my-3 fs-5">Next.js 14 Tutorial - 50 - Server and Client Components</h3>
          <div className="content-creater d-flex justify-content-md-start gap-2 align-items-center">
            <img src={codevolution} className="rounded-circle img-fluid" alt="youtuber-icon" />
            <h4>codevolution</h4>
            <div className="justify-content-end d-flex ms-auto">
              <button className="btn btn-primary btn-sm">
                <a href="/" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Default tooltip">
                  <i className="bi bi-hand-thumbs-up"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="my-lg-4 my-3">
            <ul className="nav nav-pills mb-3 gap-5" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-notes-tab" data-bs-toggle="pill" data-bs-target="#pills-notes" type="button" role="tab" aria-controls="pills-notes" aria-selected="false">
                  Notes
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-docs-tab" data-bs-toggle="pill" data-bs-target="#pills-docs" type="button" role="tab" aria-controls="pills-docs" aria-selected="true">
                  Docs
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-docs" role="tabpanel" aria-labelledby="pills-docs-tab">
                <h1>www.react.org</h1>
              </div>
              <div className="tab-pane fade" id="pills-notes" role="tabpanel" aria-labelledby="pills-notes-tab">
                <form onSubmit={handleNotes} className="my-md-2 my-3 my-lg-3">
                  <textarea className="custom-textarea fixed-height" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes here" id="floatingTextarea"></textarea>
                  <button className="btn btn-primary my-3" type="submit" onClick={downloadNotes}>
                    Save notes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <h4>Upcoming</h4>
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
