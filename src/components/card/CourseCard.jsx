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
      className={`cursor-pointer w-[300px] rounded-lg overflow-hidden shadow-sm transition-transform duration-300 transform hover:shadow-md hover:-translate-y-1
        ${
          theme === "dark"
            ? "bg-[#161b22] border border-[#30363d] text-white"
            : "bg-white border border-gray-200 text-gray-900"
        }`}
    >
      {/* Course Thumbnail */}
      <div className="w-full h-[170px] overflow-hidden rounded-t-lg">
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Course Info */}
      <div className="p-4">
        <h3
          className={`text-lg font-semibold leading-tight mb-1 truncate ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {course.title}
        </h3>
        <div className="flex items-center mt-2">
          <img
            src={course.authorLogo}
            alt={course.author}
            className="w-9 h-9 rounded-full border border-gray-300"
          />
          <p
            className={`ml-3 text-sm font-medium ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {course.author}
          </p>
        </div>
      </div>
    </div>
  );
}
