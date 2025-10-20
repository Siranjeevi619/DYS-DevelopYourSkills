import React from "react";

export default function CourseVideoCard({ course }) {
  return (
    <div className="w-[400px] bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-[#1E293B]">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt="Course Thumbnail"
          className="w-full h-[220px] object-cover"
        />
        {/* <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-[2px] rounded-md">
          {course.duration}
        </span> */}
      </div>
      <div className="flex items-start gap-3 p-4">
        <img
          src={course.tutorLogo}
          alt="Tutor Logo"
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h3 className="text-white font-medium text-base leading-tight">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{course.tutor}</p>
        </div>
      </div>
    </div>
  );
}
