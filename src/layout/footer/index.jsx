import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-black" : "bg-[#F8FAFC]";
  const textColor = isDark ? "text-[#EAF4FF]" : "text-gray-800";
  const linkColor = isDark ? "hover:text-[#00A2FF]" : "hover:text-blue-600";
  const borderColor = isDark ? "bg-[#00A2FF]/30" : "bg-gray-300";
  const secondaryText = isDark ? "text-[#9FB8D9]" : "text-gray-500";

  return (
    <footer className={`w-full ${bgColor} ${textColor} py-10`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-sm space-y-2">
          <h2 className="text-lg font-semibold text-[#00A2FF]">Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@dysedu.com" className={linkColor}>
              support@dysedu.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+91-9876543210" className={linkColor}>
              +91 98765 43210
            </a>
          </p>
          <p>Address: 42, Knowledge Park, Chennai, India</p>
        </div>

        <div className={`hidden md:block h-16 w-[1px] ${borderColor}`} />

        <div className={`text-center md:text-right text-sm ${secondaryText}`}>
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#00A2FF] font-medium">
              DYS<sup>edu</sup>
            </span>{" "}
            . All rights reserved.
          </p>
          <p className="text-xs mt-1">
            Crafted with passion for learning and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
