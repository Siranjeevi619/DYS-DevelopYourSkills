import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { PlayCircle, Save } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function CourseInfoPage() {
  const { theme } = useTheme();
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/course/${courseId}`);
        setCourse(res.data.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [baseUrl, courseId]);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700 text-xl">
        Loading course details...
      </div>
    );
  }

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#0D1117]" : "bg-[#F8FAFC]";
  const bgCard = isDark
    ? "bg-[#161B22] border-[#1E293B]"
    : "bg-white border-gray-100";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-700";
  const tagBg = isDark
    ? "bg-[#1E293B] text-[#00A2FF]"
    : "bg-[#E8F4FF] text-[#0077CC]";
  const sectionBg = isDark ? "bg-[#161B22]" : "bg-white";

  return (
    <div
      className={`${bgMain} ${textPrimary} min-h-screen py-10 px-6 sm:px-10`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 w-full">
          <div
            className={`${bgCard} rounded-2xl shadow-md overflow-hidden border`}
          >
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1 className={`text-4xl font-bold leading-tight ${textPrimary}`}>
              {course.title}
            </h1>
            <p
              className={`${
                isDark ? "text-gray-400" : "text-gray-600"
              } mt-1 text-lg font-medium`}
            >
              {course.category}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={course.authorLogo}
                alt={course.author}
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <p className={`${textPrimary} font-semibold`}>{course.author}</p>
            </div>
          </div>

          <div className={`flex flex-wrap gap-5 ${textSecondary} text-sm mt-2`}>
            <span
              className={`${sectionBg} shadow-sm px-4 py-2 rounded-full border`}
            >
              ⏱ {course.videoTitle?.length || 0} Videos
            </span>
            <span
              className={`${sectionBg} shadow-sm px-4 py-2 rounded-full border`}
            >
              📄 {course.documents?.length || 0} Docs
            </span>
            <span
              className={`${sectionBg} shadow-sm px-4 py-2 rounded-full border`}
            >
              🎓 {course.certifications?.length || 0} Certifications
            </span>
          </div>

          {course.tags?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${tagBg} px-4 py-1.5 rounded-full text-sm font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className={`${bgCard} rounded-xl shadow-sm border p-6`}>
            <h2 className={`text-2xl font-semibold mb-3 ${textPrimary}`}>
              About this course
            </h2>
            <p className={`${textSecondary} leading-relaxed text-[15px]`}>
              {course.description}
            </p>
          </div>

          <div className={`${bgCard} rounded-xl shadow-sm border p-6`}>
            <h2 className={`text-2xl font-semibold mb-3 ${textPrimary}`}>
              What you'll learn
            </h2>
            <ul
              className={`list-disc list-inside ${textSecondary} space-y-2 text-[15px]`}
            >
              {course.videoTitle?.map((title, idx) => (
                <li key={idx}>{title}</li>
              ))}
              {course.certifications?.map((cert, idx) => (
                <li key={idx}>Certification: {cert}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row items-start justify-start gap-6">
            <Button
              text="Start Learning"
              icon={PlayCircle}
              onClick={() => navigate(`/course/view/${courseId}`)}
            />
            <Button text="Save for Later" icon={Save} variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
