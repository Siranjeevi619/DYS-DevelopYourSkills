import React, { useState } from "react";
import CourseCard from "../../components/card/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "Mastering React with Projects",
      tutor: "John Anderson",
      thumbnail: "https://source.unsplash.com/400x250/?reactjs",
      tutorLogo: "https://source.unsplash.com/100x100/?developer",
    },
    {
      id: 2,
      title: "Spring Boot & MongoDB Crash Course",
      tutor: "Sarah Johnson",
      thumbnail: "https://source.unsplash.com/400x250/?springboot",
      tutorLogo: "https://source.unsplash.com/100x100/?woman",
    },
    {
      id: 3,
      title: "Data Structures & Algorithms in Java",
      tutor: "Alex Carter",
      thumbnail: "https://source.unsplash.com/400x250/?java",
      tutorLogo: "https://source.unsplash.com/100x100/?teacher",
    },
    {
      id: 4,
      title: "Full Stack Web Development Bootcamp",
      tutor: "Emily Davis",
      thumbnail: "https://source.unsplash.com/400x250/?coding",
      tutorLogo: "https://source.unsplash.com/100x100/?tech",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#001E3A] text-white px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-3 tracking-wide">
          Explore Our Courses
        </h1>
        <p className="text-gray-400 text-sm">
          Learn, build, and grow your skills with{" "}
          <span className="text-[#00A2FF] font-medium">DYS</span>.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-14">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-xl bg-[#0D1117] border border-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A2FF] shadow-lg"
        />
      </div>

      {/* Course List */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 justify-items-center">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm col-span-full">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}
