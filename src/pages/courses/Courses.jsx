import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/course/");
        setCourseData(response.data.data);
        // console.log(response.data.data);
        // console.log(response.data.data[0].courseTutorIcon);
        console.log(courseData);
      } catch (error) {
        console.error("Error fetching course list:", error.message);
      }
    };

    fetchCourses();
  }, []);

  // console.log(courseData.courseThumbnail);
  const handleEditCourse = () => {
    navigate('/updatecourse')
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {Array.isArray(courseData) && courseData.length > 0 ? (
            courseData.map((course, index) => (
              <div
                key={index}
                className="col-12 col-md-3 my-md-4 my-2 col-lg-3 col-xl-3 col-xxl-4"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <div className="card shadow course-card">
                    <img
                      src={course.courseThumbnail}
                      className="card-img-top course-card-img h-auto"
                      alt="Course Thumbnail"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <p className="">{course.courseUniqueId}</p>
                      <p>
                        by
                        <span className="text-primary h5">
                          {" "}
                          {course.tutorName}
                        </span>
                      </p>
                      <div className="row">
                        <button
                          className="btn btn-primary"
                          onClick={handleEditCourse}
                        >
                          Edit course
                        </button>
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
