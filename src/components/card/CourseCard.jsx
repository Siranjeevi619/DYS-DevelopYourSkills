import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; 

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const { theme } = useTheme(); 

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer w-[300px] rounded-xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl
        ${
          theme === "dark"
            ? "bg-[#0D1117] border-[#1E293B] hover:border-[#00A2FF]/40"
            : "bg-white border-gray-200 hover:border-[#00A2FF]/40"
        }`}
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
          className="w-12 h-12 rounded-full border border-gray-600/20"
        />
        <div>
          <h3
            className={`font-medium text-base leading-tight ${
              theme === "dark" ? "text-white" : "text-[#001E3A]"
            }`}
          >
            {course.title}
          </h3>
          <p
            className={`mt-1 text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {course.author}
          </p>
        </div>
      </div>
    </div>
  );
}
