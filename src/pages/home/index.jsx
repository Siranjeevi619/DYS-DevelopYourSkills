import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PlayCircle,
  Users,
  BookOpen,
  ArrowRight,
  Earth,
  Sun,
  Moon,
} from "lucide-react";
import Button from "../../components/button/Button";
import landingImage from "../../assets/images/landingimg1.svg";
import { useTheme } from "../../context/ThemeContext";

export default function LmsLandingPage() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleExploreCourses = () => {
    navigate("/courses");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0b0f19] text-white"
          : "bg-[#f9fafb] text-[#1e293b]"
      }`}
    >
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-6">
        {/* <button
          onClick={toggleTheme}
          className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button> */}
      </div>
<>
</>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Learn. Grow. <span className="text-[#2563eb]">Succeed.</span>
          </h1>
          <p
            className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-[#cbd5e1]" : "text-[#475569]"
            }`}
          >
            Unlock world-class courses from industry experts. Gain in-demand
            skills and transform your career path.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button
              text="Explore Courses"
              onClick={handleExploreCourses}
              icon={Earth}
            />
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full md:w-[45%] flex justify-center w-56 h-56">
          <img
            src={landingImage}
            alt="Learning Illustration"
            className="rounded-2xl shadow-lg w-72 md:w-[90%] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section
        className={`${
          theme === "dark" ? "bg-[#111827]" : "bg-[#f1f5f9]"
        } py-12 md:py-20 transition-colors`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3">{120_000}+</h3>
            <p
              className={`${
                theme === "dark" ? "text-[#94a3b8]" : "text-[#475569]"
              }`}
            >
              Active Learners
            </p>
          </div>
          <div>
            <BookOpen className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3">850+</h3>
            <p
              className={`${
                theme === "dark" ? "text-[#94a3b8]" : "text-[#475569]"
              }`}
            >
              Expert-Led Courses
            </p>
          </div>
          <div>
            <PlayCircle className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3">50+</h3>
            <p
              className={`${
                theme === "dark" ? "text-[#94a3b8]" : "text-[#475569]"
              }`}
            >
              Skill Categories
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="px-6 md:px-20 py-16">
        <div className="text-center mb-10">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme === "dark" ? "text-white" : "text-[#0f172a]"
            }`}
          >
            Featured Courses
          </h2>
          <p
            className={`${
              theme === "dark" ? "text-[#94a3b8]" : "text-[#475569]"
            } mt-2`}
          >
            Top-rated courses handpicked by industry professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Full Stack Web Development",
              tutor: "John Doe",
              img: "https://cdn.dribbble.com/userupload/2758306/file/original-ff6f1dc7deec3e7b0359b304aa10fbb7.png?resize=1024x768",
            },
            {
              title: "Data Science & Machine Learning",
              tutor: "Jane Smith",
              img: "https://cdn.dribbble.com/userupload/2537499/file/original-2cf49e32c2cfa7dc0dc718214af567fa.png?resize=1024x768",
            },
            {
              title: "UI/UX Design Mastery",
              tutor: "Alex Johnson",
              img: "https://cdn.dribbble.com/userupload/3839390/file/original-45829efefbba9b5e9cf8eb4ee1d63e77.png?resize=1024x768",
            },
          ].map((course, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all ${
                theme === "dark" ? "bg-[#1e293b]" : "bg-white"
              } hover:-translate-y-1`}
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p
                  className={`${
                    theme === "dark" ? "text-[#cbd5e1]" : "text-[#64748b]"
                  } text-sm`}
                >
                  {course.tutor}
                </p>
                <button className="text-[#2563eb] font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
