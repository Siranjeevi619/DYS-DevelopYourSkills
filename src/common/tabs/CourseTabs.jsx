import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function CourseTabs({ documents, certifications }) {
  const [activeTab, setActiveTab] = useState("documents");

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("documents")}
          className={`flex-1 text-center py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            activeTab === "documents"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          aria-selected={activeTab === "documents"}
        >
          Documents
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`flex-1 text-center py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            activeTab === "certifications"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
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
              <ul className="space-y-3 text-gray-700">
                {documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-2 hover:text-blue-600"
                  >
                    <CheckCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
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
              <div className="text-gray-400 italic">
                No documents available.
              </div>
            )}
          </div>
        ) : (
          <div>
            {certifications.length > 0 ? (
              <ul className="space-y-3 text-green-700 font-medium">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-gray-400 italic">
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
