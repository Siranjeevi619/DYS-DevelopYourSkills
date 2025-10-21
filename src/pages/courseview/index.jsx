import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CourseTabs from "../../common/tabs/CourseTabs";
import CourseRoadmap from "../../utils/CourseRoadmap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function CourseViewPage() {
  const { theme } = useTheme();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [course, setCourse] = useState(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const { courseId } = useParams();

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/course/${courseId}`);
      setCourse(res.data.data);
      setCurrentVideoIdx(0);
    } catch (e) {
      console.error("Failed to fetch course:", e);
      setCourse(null);
    }
  };

  useEffect(() => {
    if (courseId) {
      fetchCourse();
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading course data...</p>
      </div>
    );
  }

  const isDark = theme === "dark";
  const bgMain = isDark ? "bg-[#0D1117]" : "bg-gray-50";
  const bgCard = isDark ? "bg-[#161B22]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-600";
  const hoverBg = isDark ? "hover:bg-[#1E293B]" : "hover:bg-gray-100";

  const upcomingVideos = course.videoUrls.slice(0, 3);
  const upcomingVideoTitles = course.videoTitle.slice(0, 3);

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 p-6 ${bgMain} min-h-screen`}
    >
      <div className="md:w-2/3 w-full flex flex-col">
        <div className="w-full aspect-video mb-4 bg-black rounded-lg overflow-hidden">
          <ReactPlayer
            url={course.videoUrls[currentVideoIdx]}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <h2 className={`text-lg font-semibold ${textPrimary}`}>
          {course.videoTitle[currentVideoIdx]}
        </h2>
        <CourseTabs
          documents={course.documents || []}
          certifications={course.certifications || []}
        />
      </div>

      <div className="md:w-1/3 w-full flex flex-col gap-6">
        <div className={`${bgCard} rounded-lg shadow-md p-4`}>
          <h3 className={`text-lg font-medium mb-4 ${textPrimary}`}>
            Course Playlist
          </h3>
          <div className="flex flex-col gap-3">
            {upcomingVideos.map((url, idx) => (
              <button
                key={url}
                onClick={() => setCurrentVideoIdx(idx)}
                className={`flex gap-3 items-center p-2 rounded transition border ${
                  currentVideoIdx === idx
                    ? "bg-green-100 border-green-400"
                    : `${hoverBg} border-transparent`
                }`}
              >
                <img
                  src={course.thumbnailUrl}
                  alt={upcomingVideoTitles[idx]}
                  className="w-20 h-12 object-cover rounded"
                />
                <span
                  className={`text-sm text-left ${
                    currentVideoIdx === idx
                      ? "font-bold text-green-700"
                      : textSecondary
                  }`}
                >
                  {upcomingVideoTitles[idx]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className={`${bgCard} rounded-lg shadow-md p-4`}>
          <h3 className={`text-lg font-medium mb-4 ${textPrimary}`}>
            Course Roadmap
          </h3>
          <CourseRoadmap topics={course.roadmap || []} />
        </div>
      </div>
    </div>
  );
}

export default CourseViewPage;
