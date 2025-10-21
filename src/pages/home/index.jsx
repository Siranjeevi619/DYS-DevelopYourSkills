import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayCircle, Users, BookOpen, ArrowRight, Earth } from "lucide-react";
import Button from "../../components/button/Button";
import landingImage from "../../assets/images/landingimg1.svg";

export default function LmsLandingPage() {
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#0b0f19] text-[#1e293b] dark:text-white transition-colors duration-300">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-24">
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Learn. Grow. <span className="text-[#2563eb]">Succeed.</span>
          </h1>
          <p className="text-[#475569] dark:text-[#cbd5e1] text-lg leading-relaxed">
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

      <section className="bg-[#f1f5f9] dark:bg-[#111827] py-12 md:py-20 transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3 text-[#1e293b] dark:text-white">
              120K+
            </h3>
            <p className="text-[#475569] dark:text-[#94a3b8]">
              Active Learners
            </p>
          </div>
          <div>
            <BookOpen className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3 text-[#1e293b] dark:text-white">
              850+
            </h3>
            <p className="text-[#475569] dark:text-[#94a3b8]">
              Expert-Led Courses
            </p>
          </div>
          <div>
            <PlayCircle className="w-10 h-10 mx-auto text-[#2563eb]" />
            <h3 className="text-2xl font-semibold mt-3 text-[#1e293b] dark:text-white">
              50+
            </h3>
            <p className="text-[#475569] dark:text-[#94a3b8]">
              Skill Categories
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white">
            Featured Courses
          </h2>
          <p className="text-[#475569] dark:text-[#94a3b8] mt-2">
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
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white dark:bg-[#1e293b] hover:-translate-y-1"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-[#0f172a] dark:text-white">
                  {course.title}
                </h3>
                <p className="text-[#64748b] dark:text-[#cbd5e1] text-sm">
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
