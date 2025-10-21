import React from "react";
import { useLocation } from "react-router-dom";

export default function CourseInfoPage() {
  const location = useLocation();
  const course = location.state?.course;

  return (
    <div className="bg-[#F8FAFC] text-gray-900 min-h-screen p-4 sm:p-8 md:p-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-shrink-0 md:w-1/3">
          <img
            src={course.thumbnailUrl}
            alt={course.title}
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {course.title}
            </h1>
            <p className="text-gray-600 mt-2 text-lg">{course.category}</p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={course.authorLogo}
                alt={course.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-gray-800 font-medium">{course.author}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <span>⭐ 4.8 (1200 ratings)</span>
            <span>⏱ 12 hours</span>
            <span>📄 {course.documents.length} Documents</span>
            <span>🎓 {course.certifications.length} Certifications</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Course Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {course.description}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {course.videoTitle.map((title, idx) => (
                <li key={idx}>{title}</li>
              ))}
              {course.certifications.map((cert, idx) => (
                <li key={idx}>Certification: {cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
