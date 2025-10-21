import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#EAF4FF] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-sm space-y-2">
          <h2 className="text-lg font-semibold text-[#00A2FF]">Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:support@dysedu.com"
              className="hover:text-[#00A2FF]"
            >
              support@dysedu.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+91-9876543210" className="hover:text-[#00A2FF]">
              +91 98765 43210
            </a>
          </p>
          <p>Address: 42, Knowledge Park, Chennai, India</p>
        </div>

        <div className="hidden md:block h-16 w-[1px] bg-[#00A2FF]/30" />

        <div className="text-center md:text-right text-sm text-[#9FB8D9]">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#00A2FF] font-medium">DYS<sup>edu</sup></span>. All
            rights reserved.
          </p>
          <p className="text-xs mt-1">
            Crafted with passion for learning and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
