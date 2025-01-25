import React, { useEffect, useState } from "react";
import CourseCard from "./Helpers/CourseCard";

function Course() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:6969/course/list/");
        const data = await res.json();

        console.log("Fetched data:", data.courses);

        setCourseData(Array.isArray(data.courses) ? data.courses : []);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourseData([]);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {courseData.length === 0 ? (
          <p>No courses available</p>
        ) : (
          courseData.map((course, index) => (
            <CourseCard {...course} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default Course;
