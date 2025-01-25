import React, { useEffect } from "react";
import "../../../assets/Style/OutComes.css";

function Outcomes({
  outcomes = [],
  documents = [],
  certifications = [],
  videoLinks = [],
}) {
  useEffect(() => {
    console.log(outcomes, documents, certifications, videoLinks);
  }, [outcomes, documents, certifications, videoLinks]);

  return (
    <div className="container">
      <ul
        className="nav  nav-pills mb-3 justify-content-md-start justify-content-center gap-2"
        role="tablist"
      >
        <li className="nav-item list-unstyled " role="presentation">
          <button
            className="nav-link active"
            id="pills-video-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-video"
            type="button"
            role="tab"
            aria-controls="pills-video"
            aria-selected="true"
          >
            Video
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-outcome-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-outcome"
            type="button"
            role="tab"
            aria-controls="pills-outcome"
            aria-selected="false"
          >
            Outcomes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-documentation-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-documentation"
            type="button"
            role="tab"
            aria-controls="pills-documentation"
            aria-selected="false"
          >
            Docs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-certification-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-certification"
            type="button"
            role="tab"
            aria-controls="pills-certification"
            aria-selected="false"
          >
            Certify
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-video"
          role="tabpanel"
          aria-labelledby="pills-video-tab"
        >
          <h1>Videos</h1>
          <ul className="list-unstyled">
            {videoLinks.length > 0 ? (
              videoLinks.map((video, index) => <li key={index}>{video}</li>)
            ) : (
              <li>No videos available</li>
            )}
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-outcome"
          role="tabpanel"
          aria-labelledby="pills-outcome-tab"
        >
          <h1>Outcomes</h1>
          <ul className="list-unstyled">
            {outcomes.length > 0 ? (
              outcomes.map((outcome, index) => <li key={index}>{outcome}</li>)
            ) : (
              <li>No outcomes available</li>
            )}
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-documentation"
          role="tabpanel"
          aria-labelledby="pills-documentation-tab"
        >
          <h1>Docs</h1>
          <ul className="list-unstyled">
            {documents.length > 0 ? (
              documents.map((doc, index) => (
                <li key={index}>
                  <a href={doc}>{doc}</a>
                </li>
              ))
            ) : (
              <li>No documents available</li>
            )}
          </ul>
        </div>
        <div
          className="tab-pane fade"
          id="pills-certification"
          role="tabpanel"
          aria-labelledby="pills-certification-tab"
        >
          <h1>Certifications</h1>
          <ul className="list-unstyled">
            {certifications.length > 0 ? (
              certifications.map((cert, index) => (
                <li key={index}>
                  <a href={cert}>{cert}</a>
                </li>
              ))
            ) : (
              <li>No certifications available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Outcomes;
