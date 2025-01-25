import React, { useState } from "react";
import { useLocation } from "react-router";
import "../../assets/Style/ViewCourses.css";
import PlaylistVideo from "./helpers/PlaylistVideo";
import SenseiPage from "../Sensei/SenseiPage";

function ViewCourses() {
  const location = useLocation();
  const {
    courseName = "",
    courseDescription = "",
    courseLanguage = "",
    tutorName = "",
    courseTutorIcon = "",
    videoLink = [],
    videoTitle = [],
    documents = [],
    courseThumbnail = "",
  } = location.state || {};
  console.log(location.state);
  const [selectedVideo, setSelectedVideo] = useState({
    url:
      videoLink.length > 0
        ? videoLink[0]
        : "https://www.youtube.com/embed/defaultVideoID",
    title: videoTitle.length > 0 ? videoTitle[0] : "Default Video Title",
  });

  const [notes, setNotes] = useState("");

  const handleNotes = (event) => {
    event.preventDefault();
    console.log("Saved Notes:", notes);
  };

  const downloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([notes], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "notes.txt";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container">
      <div className="row py-md-5 py-4">
        {/* Left Section - Video Player */}
        <div className="col-12 col-md-7">
          <div className="responsive-iframe-container">
            <iframe src={selectedVideo.url} width="560" height="315"></iframe>
          </div>
          <h3 className="my-md-3 my-3 fs-5">{selectedVideo.title}</h3>
          <div className="content-creator d-flex justify-content-md-start gap-2 align-items-center">
            <img
              src={`http://localhost:6969${courseTutorIcon}`}
              className="rounded-circle img-fluid"
              alt="Tutor Icon"
            />
            <h4>{tutorName}</h4>
          </div>
          <div className="my-lg-4 my-3">
            <h5>{courseDescription}</h5>
            <h5>
              Language: <span className="special-span">{courseLanguage}</span>
            </h5>

            <ul
              className="nav nav-pills mb-3 gap-5 my-md-4 my-2"
              id="courseTabs"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#docs"
                  type="button"
                >
                  Docs
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#notes"
                  type="button"
                >
                  Notes
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  type="button"
                  onClick={() => {
                    window.open("https://vscode.dev/");
                  }}
                >
                  Dys Lab
                </button>
              </li>
            </ul>

            <div className="tab-content" id="courseTabContent">
              {/* Docs Section */}
              <div className="tab-pane fade show active" id="docs">
                {documents.length > 0 ? (
                  documents.map((doc, index) => (
                    <div key={index}>
                      <a href={doc} target="_blank" rel="noopener noreferrer">
                        {doc}
                      </a>
                      <br />
                    </div>
                  ))
                ) : (
                  <p>No documents available.</p>
                )}
              </div>

              {/* Notes Section */}
              <div className="tab-pane fade" id="notes">
                <form onSubmit={handleNotes}>
                  <textarea
                    className="custom-textarea fixed-height"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Write your notes here..."
                  ></textarea>
                  <button
                    className="btn btn-primary my-3"
                    type="button"
                    onClick={downloadNotes}
                  >
                    Save Notes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Upcoming Videos */}
        <div className="col-12 col-md-5">
          <h4>Upcoming Videos</h4>
          {videoLink.length > 0 ? (
            videoLink.map((link, index) => (
              <PlaylistVideo
                courseThumbnail={`http://localhost:6969${courseThumbnail}`}
                key={index}
                title={videoTitle[index]}
                courseName={courseName}
                tutorName={tutorName}
                onVideoSelect={() =>
                  setSelectedVideo({ url: link, title: videoTitle[index] })
                }
              />
            ))
          ) : (
            <p>No videos available.</p>
          )}
        </div>
      </div>

      {/* SenseiPage Section */}
      <div className="my-md-5 my-3">
        <SenseiPage />
      </div>
    </div>
  );
}

export default ViewCourses;
