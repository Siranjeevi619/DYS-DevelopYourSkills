import axios from "axios";
import React, { useEffect, useState } from "react";

function Outcomes() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        setPost(Response.data);
        console.log("data fetched");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <ul className="nav nav-pills mb-3 gap-5" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="true">
            Video
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-outcome-tab" data-bs-toggle="pill" data-bs-target="#pills-outcome" type="button" role="tab" aria-controls="pills-outcome" aria-selected="false">
            Outcomes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link " id="pills-documentation-tab" data-bs-toggle="pill" data-bs-target="#pills-documentation" type="button" role="tab" aria-controls="pills-documentation" aria-selected="false">
            Docs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-certification-tab" data-bs-toggle="pill" data-bs-target="#pills-certification" type="button" role="tab" aria-controls="pills-certification" aria-selected="false">
            Certify
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
          <h1>video</h1>
        </div>
        <div className="tab-pane fade" id="pills-outcome" role="tabpanel" aria-labelledby="pills-outcome-tab">
          <h1>outcomes</h1>
        </div>
        <div className="tab-pane fade" id="pills-documentation" role="tabpanel" aria-labelledby="pills-documentation-tab">
          <h1>Docs</h1>
        </div>
        <div className="tab-pane fade" id="pills-certification" role="tabpanel" aria-labelledby="pills-certification-tab">
          <h1>certify</h1>
        </div>
      </div>
    </>
  );
}

export default Outcomes;
