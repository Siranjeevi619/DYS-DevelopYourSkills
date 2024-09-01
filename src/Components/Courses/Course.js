import React from "react";
import CourseCard from "./Helpers/CourseCard";
import SearchBar from "./Helpers/SearchBar";

import CoursesList from "./Helpers/CourseData.js";
import SkeletonCourseCard from "./Helpers/SkeletonCourseCard.js";


function Course() {

  return (
    <>
      <div className="container">
        <div className="row">
          <SearchBar />
          {CoursesList.map((courses, index) => (
            <CourseCard key={index} {...courses} />
          ))}
          <SkeletonCourseCard />
        </div>
      </div>
    </>
  );
}

export default Course;
