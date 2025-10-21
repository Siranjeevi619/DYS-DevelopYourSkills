import React, { useState } from "react";
import ReactPlayer from "react-player";
import CourseTabs from "../../common/tabs/CourseTabs";
import CourseRoadmap from "../../utils/CourseRoadmap";

const apiData = {
  id: "68f5cee8-6b212f3d-752fad07",
  title: "Mastering Spring Boot 5",
  description:
    "A complete hands-on course covering Spring Boot 3, MongoDB, and RESTful APIs.",
  author: "John Doe",
  category: "Backend Development",
  authorLogo: "https://example.com/authors/john_doe.png",
  thumbnailUrl: "https://example.com/thumbnails/springboot3.png",
  videoUrls: [
    "https://example.com/videos/intro.mp4",
    "https://example.com/videos/jpa-setup.mp4",
    "https://example.com/videos/jwt-auth.mp4",
    "https://example.com/videos/extra-video.mp4",
  ],
  videoTitle: [
    "Introduction to Spring Boot 3",
    "Setting up MongoDB with Spring Data",
    "Implementing JWT Authentication",
    "Extra Video Title",
  ],
  documents: [
    "https://example.com/docs/springboot3.pdf",
    "https://example.com/docs/jwt-guide.pdf",
  ],
  certifications: [
    "Spring Boot 3 Certified Developer",
    "MongoDB Integration Specialist",
  ],
  tags: ["Spring Boot", "MongoDB", "REST API", "JWT"],
  topics: [
    "Topic 1: Setup",
    "Topic 2: Backend",
    "Topic 3: Frontend",
    "Topic 4: Testing",
    "Topic 5: Deployment",
  ],
};

function CourseViewPage() {
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);

  const {
    title,
    description,
    author,
    authorLogo,
    category,
    thumbnailUrl,
    videoUrls,
    videoTitle,
    documents,
    certifications,
    tags,
    topics,
  } = apiData;

  const upcomingVideos = videoUrls.slice(0, 3);
  const upcomingVideoTitles = videoTitle.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Main Section */}
      <div className="md:w-2/3 w-full flex flex-col">
        <div className="w-full aspect-video mb-4 bg-black rounded-lg overflow-hidden">
          <ReactPlayer
            url={videoUrls[currentVideoIdx]}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <h2 className="text-lg font-semibold">{videoTitle[currentVideoIdx]}</h2>
        <CourseTabs documents={documents} certifications={certifications} />
      </div>

      <div className="md:w-1/3 w-full flex flex-col gap-6">
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
                  src={thumbnailUrl}
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
          <CourseRoadmap topics={topics} />
        </div>
      </div>
    </div>
  );
}

export default CourseViewPage;
