import axios from "axios";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/course/");
        setCourseData(response.data.data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8080/course/${courseId}`);
      setCourseData((prevCourses) =>
        prevCourses.filter((course) => course.courseUniqueId !== courseId)
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <div className="my-md-5 my-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              {courseData.length ? (
                <div>
                  {courseData.map((course) => (
                    <div key={course.courseUniqueId}>
                      <div className="card my-md-5 my-3">
                        <div className="row">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-4">
                                <div className="ms-3">
                                  <img
                                    src={course.courseThumbnail}
                                    className="img-fluid w-auto h-75"
                                    alt={course.courseName}
                                  />
                                </div>
                              </div>
                              <div className="col-8">
                                <h5>{course.courseName}</h5>
                                <h6>{course.tutorName}</h6>
                                <p>{course.courseLanguage}</p>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    handleDelete(course.courseUniqueId)
                                  }
                                >
                                  Delete Course
                                  <i className="bi bi-delete"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No courses available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
