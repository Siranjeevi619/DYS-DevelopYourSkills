import React, { useState, useEffect } from "react";
import CourseVideoCard from "../../components/card/CourseCard";
import { useTheme } from "../../context/ThemeContext";
import Button from "../../components/button/Button";
import { EarthIcon } from "lucide-react";

export default function LmsLandingPage() {
  const { theme } = useTheme();

  const courses = [
    {
      title: "Full Stack Development",
      tutor: "John Doe • CourseTutor",
      thumbnail:
        "https://images.unsplash.com/photo-1584697964190-7b3cbb74fbc3?auto=format&fit=crop&w=800&q=80",
      tutorLogo: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
      duration: "12:45",
    },
    {
      title: "Data Structures & Algorithms",
      tutor: "Jane Smith • CourseTutor",
      thumbnail:
        "https://images.unsplash.com/photo-1612832021393-16b5a2c1094b?auto=format&fit=crop&w=800&q=80",
      tutorLogo: "https://avatars.githubusercontent.com/u/583231?v=4",
      duration: "10:30",
    },
    {
      title: "Machine Learning",
      tutor: "Alice Johnson • CourseTutor",
      thumbnail:
        "https://images.unsplash.com/photo-1590608897129-79e18b146c0f?auto=format&fit=crop&w=800&q=80",
      tutorLogo: "https://avatars.githubusercontent.com/u/6752311?v=4",
      duration: "15:20",
    },
    {
      title: "Cloud Computing",
      tutor: "Bob Lee • CourseTutor",
      thumbnail:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9b5?auto=format&fit=crop&w=800&q=80",
      tutorLogo: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
      duration: "11:50",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [courses.length]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 md:px-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0D1117] text-white" : "bg-white text-[#001E3A]"
      }`}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1
            className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${
              theme === "dark" ? "text-[#EAF4FF]" : "text-[#001E3A]"
            }`}
          >
            Empower Your Learning Journey with{" "}
            <span className="text-[#00A2FF]">Open Source</span> LMS
          </h1>
          <p
            className={`text-lg leading-relaxed mb-6 ${
              theme === "dark" ? "text-[#D1D5DB]" : "text-gray-700"
            }`}
          >
            Unlock limitless learning through our{" "}
            <span className="text-[#00A2FF] font-medium">
              curved learning path
            </span>
            , guiding you from fundamentals to mastery. Built as an{" "}
            <span className="text-[#00A2FF] font-medium">
              open source platform
            </span>
            , our LMS empowers developers, educators, and learners to
            collaborate.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-[#D1D5DB]" : "text-gray-700"
            }`}
          >
            With seamless integration, real-time progress tracking, and
            community-driven enhancements, you’re part of a growing ecosystem
            built for lifelong learning.
          </p>
          <div className="my-2">
            <Button text="Explore" icon={EarthIcon} />
          </div>
        </div>

        <div className="flex-1 relative w-full md:w-1/2 h-[360px] overflow-hidden">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`absolute inset-0 flex justify-center transition-all duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <CourseVideoCard course={course} />
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {courses.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  i === current ? "bg-[#00A2FF]" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
