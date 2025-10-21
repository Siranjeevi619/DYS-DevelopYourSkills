import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { PlayCircle, Save } from "lucide-react";

export default function CourseInfoPage() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/course/${courseId}`);
        console.log(res.data.data);
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

  return (
    <div className="bg-[#F8FAFC] text-gray-900 min-h-screen py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 w-full">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <img
              src={course.thumbnailUrl}
              alt={course.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-600 mt-1 text-lg font-medium">
              {course.category}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={course.authorLogo}
                alt={course.author}
                className="w-12 h-12 rounded-full object-cover shadow-sm"
              />
              <p className="text-gray-800 font-semibold">{course.author}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-gray-700 text-sm mt-2">
            <span className="bg-white shadow-sm px-4 py-2 rounded-full border border-gray-200">
              ⏱ {course.videoTitle?.length || 0} Videos
            </span>
            <span className="bg-white shadow-sm px-4 py-2 rounded-full border border-gray-200">
              📄 {course.documents?.length || 0} Docs
            </span>
            <span className="bg-white shadow-sm px-4 py-2 rounded-full border border-gray-200">
              🎓 {course.certifications?.length || 0} Certifications
            </span>
          </div>

          {course.tags?.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#E8F4FF] text-[#0077CC] px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-3">About this course</h2>
            <p className="text-gray-700 leading-relaxed text-[15px]">
              {course.description}
            </p>
          </div>

          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-3">What you'll learn</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-[15px]">
              {course.videoTitle?.map((title, idx) => (
                <li key={idx}>{title}</li>
              ))}
              {course.certifications?.map((cert, idx) => (
                <li key={idx}>Certification: {cert}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-row items-start justify-start  gap-6 bg-gray-50">
            <Button text="Start Learning" icon={PlayCircle} />
            <Button text="Save for Later" icon={Save} variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
