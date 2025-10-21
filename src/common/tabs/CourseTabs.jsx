import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/ThemeContext";

function CourseTabs({ documents, certifications }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("documents");

  const isDark = theme === "dark";
  const bgCard = isDark ? "bg-[#161B22]" : "bg-white";
  const borderColor = isDark ? "border-[#1E293B]" : "border-gray-200";
  const textPrimary = isDark ? "text-white" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const hoverText = isDark ? "hover:text-[#00A2FF]" : "hover:text-blue-600";
  const docText = isDark ? "text-[#00A2FF]" : "text-blue-600";
  const certText = isDark ? "text-green-400" : "text-green-700";
  const certIcon = isDark ? "text-green-500" : "text-green-500";

  return (
    <div className={`mt-6 ${bgCard} rounded-lg shadow-md`}>
      <div className={`flex border-b ${borderColor}`}>
        <button
          onClick={() => setActiveTab("documents")}
          className={`flex-1 text-center py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            activeTab === "documents"
              ? `border-b-4 ${docText}`
              : `${textSecondary} ${hoverText}`
          }`}
          aria-selected={activeTab === "documents"}
        >
          Documents
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`flex-1 text-center py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            activeTab === "certifications"
              ? `border-b-4 ${certText}`
              : `${textSecondary} ${hoverText}`
          }`}
          aria-selected={activeTab === "certifications"}
        >
          Certifications
        </button>
      </div>

      <div className="p-6 min-h-[100px]">
        {activeTab === "documents" ? (
          <div>
            {documents.length > 0 ? (
              <ul className={`space-y-3 ${textPrimary}`}>
                {documents.map((doc) => (
                  <li
                    key={doc}
                    className={`flex items-center gap-2 ${hoverText}`}
                  >
                    <CheckCircleIcon
                      className={`h-5 w-5 ${docText} flex-shrink-0`}
                    />
                    <a
                      href={doc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {doc.split("/").pop()}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={`${textSecondary} italic`}>
                No documents available.
              </div>
            )}
          </div>
        ) : (
          <div>
            {certifications.length > 0 ? (
              <ul className={`space-y-3 font-medium ${certText}`}>
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <CheckCircleIcon
                      className={`h-5 w-5 ${certIcon} flex-shrink-0`}
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            ) : (
              <div className={`${textSecondary} italic`}>
                No certifications available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseTabs;
