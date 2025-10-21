import React, { useEffect, useState } from "react";
import CourseCard from "../../components/card/CourseCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function CoursesPage() {
  const { theme } = useTheme();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/course/all-course`);
        setCourses(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#0D1117]" : "bg-[#F8FAFC]";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const inputBg = isDark
    ? "bg-[#161B22] border-[#30363d] text-white placeholder-gray-500"
    : "bg-white border border-gray-300 text-gray-900 placeholder-gray-400";

  return (
    <div
      className={`${bgMain} ${textPrimary} min-h-screen px-6 sm:px-12 py-14`}
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1
          className={`text-4xl font-semibold mb-2 tracking-tight ${textPrimary}`}
        >
          Explore Our Courses
        </h1>
        <p className={`text-lg ${textSecondary}`}>
          Learn, build, and grow your skills with{" "}
          <span className="text-[#00A2FF] font-semibold">DYS</span>.
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-16">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`w-full px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#00A2FF] shadow-md transition ${inputBg}`}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() =>
                navigate(`/course/${course.id}`, { state: { course } })
              }
            />
          ))
        ) : (
          <p className={`text-center text-sm col-span-full ${textSecondary}`}>
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
