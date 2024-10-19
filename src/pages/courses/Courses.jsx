import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/courses/")
      .then((res) => {
        // Check if readCourse exists and is an array
        if (Array.isArray(res.data.readCourse)) {
          setCourseData(res.data.readCourse);
        } else {
          console.error("Unexpected response format:", res.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {Array.isArray(courseData) && courseData.length > 0 ? (
            courseData.map((course) => (
              <div className="col-12" key={course._id}>
                <div className="card" style={{ width: "19rem" }}>
                  <div className="card-img-top">
                    <img
                      src={`http://localhost:6969${course.courseThumbnail}`}
                      alt="course-image"
                      className="img-fluid"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-start">
                      <div className="me-2">
                        <img
                          src={`http://localhost:6969/courses/${course.courseTutorIcon}`}
                          className="img-fluid rounded-circle"
                          style={{ width: "40px", height: "40px" }}
                          alt="Tutor Logo"
                        />
                      </div>

                      <div>
                        <div
                          className="card-title"
                          style={{ fontWeight: "bold" }}
                        >
                          {course.courseName}
                        </div>
                        <div className="card-text text-muted">
                          {course.courseTutor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No courses available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
