import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`w-full shadow-md transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0B0E14] text-white" : "bg-white text-[#001E3A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="8"
              fill={theme === "dark" ? "#001E3A" : "#EAF4FF"}
            />
            <path
              d="M14 34C18 26 22 22 30 20"
              stroke="#00A2FF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="36" cy="12" r="4" fill="#00A2FF" />
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-wide">
              DYS<sup>edu</sup>
            </span>
          </div>
        </div>

        {/* --- Center Navigation Links --- */}
        <ul className="hidden md:flex items-center gap-8 list-none absolute left-1/2 transform -translate-x-1/2">
          {[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/courses" },
            { label: "Sensei", href: "#" },
            { label: "Contact", href: "#" },
            { label: "About", href: "#" },
          ].map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className={`inline-flex items-center gap-2 text-md font-medium px-2 py-2 transition-colors duration-300 ${
                  theme === "dark" ? "text-[#EAF4FF]" : "text-[#001E3A]"
                }`}
              >
                <span>{item.label}</span>
              </a>
              <span className="absolute left-0 right-0 bottom-0 h-[2px] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100 bg-[#00A2FF] rounded-sm" />
            </li>
          ))}
        </ul>

        {/* --- Right Section (Theme + User) --- */}
        <div className="flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-[#00A2FF]/10 transition"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364-6.364l-1.06 1.06M6.696 17.304l-1.06 1.06m0-12.728l1.06 1.06m11.608 11.608l1.06 1.06M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3a7.5 7.5 0 0 0 9.79 9.79z"
                />
              </svg>
            )}
          </button>

          {/* User Icon */}
          <button
            aria-label="User profile"
            className="p-2 rounded-full hover:bg-[#00A2FF]/10 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a8.25 8.25 0 1 1 15 0H4.5z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-[#00A2FF]/10 transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
