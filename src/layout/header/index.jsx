import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="8" fill="#001E3A" />
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

        <ul className="hidden md:flex items-center gap-8 list-none absolute left-1/2 transform -translate-x-1/2">
          {[
            { label: "Home", href: "#" },
            { label: "Courses", href: "#" },
            { label: "Sensei", href: "#" },
            { label: "Contact", href: "#" },
            { label: "About", href: "#" },
          ].map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-md font-medium px-2 py-2 text-[#EAF4FF]"
              >
                <span>{item.label}</span>
              </a>
              <span className="absolute left-0 right-0 bottom-0 translate-y-[0px] h-[2px] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100 bg-[#00A2FF] rounded-sm" />
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-white/5"
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
                stroke="#EAF4FF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
