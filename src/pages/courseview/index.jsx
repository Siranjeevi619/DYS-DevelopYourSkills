import React, { useState } from "react";
import ReactPlayer from "react-player";
import CourseTabs from "../../common/tabs/CourseTabs";

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
  ],
  videoTitle: [
    "Introduction to Spring Boot 3",
    "Setting up MongoDB with Spring Data",
    "Implementing JWT Authentication",
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
  } = apiData;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Main Section */}
      <div className="md:w-2/3 w-full flex flex-col">
        {/* <div className="flex items-center gap-4 mb-4">
          <img
            src={authorLogo}
            alt={author}
            className="w-14 h-14 rounded-full border"
          />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xs text-gray-500">
              by {author} ・ {category}
            </p>
          </div>
        </div>
        <p className="mb-2 text-gray-700">{description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div> */}
        <div className="w-full aspect-video mb-4 bg-black rounded-lg overflow-hidden">
          <ReactPlayer
            url={videoUrls[currentVideoIdx]}
            width="100%"
            height="100%"
            controls
          />
        </div>
        <h2 className="text-lg font-semibold">{videoTitle[currentVideoIdx]}</h2>
        {/* Documents and Certifications */}

        <CourseTabs documents={documents} certifications={certifications} />
      </div>
      {/* Sidebar Section */}
      <div className="md:w-1/3 w-full bg-white rounded-lg shadow-md p-4 h-fit">
        <h3 className="text-lg font-medium mb-4">Course Playlist</h3>
        <div className="flex flex-col gap-3">
          {videoUrls.map((url, idx) => (
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
                alt={videoTitle[idx]}
                className="w-20 h-12 object-cover rounded"
              />
              <span
                className={`text-sm text-left ${
                  currentVideoIdx === idx ? "font-bold text-green-700" : ""
                }`}
              >
                {videoTitle[idx]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseViewPage;
