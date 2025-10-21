import React from "react";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-[300px] bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-[#1E293B] hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={course.thumbnailUrl}
        alt={course.title}
        className="w-full h-[180px] object-cover"
      />
      <div className="flex items-start gap-3 p-4">
        <img
          src={course.authorLogo}
          alt={course.author}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-white font-medium text-base leading-tight">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{course.author}</p>
        </div>
      </div>
    </div>
  );
}
