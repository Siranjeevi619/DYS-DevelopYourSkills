import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CourseTabs from "../../common/tabs/CourseTabs";
import CourseRoadmap from "../../utils/CourseRoadmap";
import axios from "axios";
import { useParams } from "react-router-dom";

function CourseViewPage() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [course, setCourse] = useState(null);
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const { courseId } = useParams();

  const fetchCourse = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/course/${courseId}`);
      setCourse(res.data.data);
      setCurrentVideoIdx(0); // reset to first video on course load
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

  // Limit upcoming videos to max 3 or less
  const upcomingVideos = course.videoUrls.slice(0, 3);
  const upcomingVideoTitles = course.videoTitle.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Main Section */}
      <div className="md:w-2/3 w-full flex flex-col">
        <div className="w-full aspect-video mb-4 bg-black rounded-lg overflow-hidden">
          <ReactPlayer
            url={course.videoUrls[currentVideoIdx]}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <h2 className="text-lg font-semibold">
          {course.videoTitle[currentVideoIdx]}
        </h2>
        <CourseTabs
          documents={course.documents || []}
          certifications={course.certifications || []}
        />
      </div>

      {/* Sidebar Section */}
      <div className="md:w-1/3 w-full flex flex-col gap-6">
        {/* Upcoming Videos Card */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-4">Course Playlist</h3>
          <div className="flex flex-col gap-3">
            {upcomingVideos.map((url, idx) => (
              <button
                key={url}
                onClick={() => setCurrentVideoIdx(idx)}
                className={`flex gap-3 items-center p-2 rounded transition border ${
                  currentVideoIdx === idx
                    ? "bg-green-100 border-green-400"
                    : "hover:bg-gray-100 border-transparent"
                }`}
              >
                <img
                  src={course.thumbnailUrl}
                  alt={upcomingVideoTitles[idx]}
                  className="w-20 h-12 object-cover rounded"
                />
                <span
                  className={`text-sm text-left ${
                    currentVideoIdx === idx ? "font-bold text-green-700" : ""
                  }`}
                >
                  {upcomingVideoTitles[idx]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-medium mb-4">Course Roadmap</h3>
          <CourseRoadmap topics={course.roadmap || []} />
        </div>
      </div>
    </div>
  );
}

export default CourseViewPage;
