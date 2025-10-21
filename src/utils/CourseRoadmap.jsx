import React, { useState } from "react";

function CourseRoadmap({ topics }) {
  const [checked, setChecked] = useState(() =>
    Array(topics.length).fill(false)
  );

  const lastCheckedIndex = checked.lastIndexOf(true);

  const handleCheck = (idx) => {
    const newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    setChecked(newChecked);
  };

  return (
    <div className="relative pl-10">
      {/* Vertical progress line */}
      <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-300 rounded">
        <div
          className="bg-indigo-600 w-0.5 rounded transition-all duration-500 origin-top"
          style={{
            height:
              lastCheckedIndex === -1 ? 0 : `${lastCheckedIndex * 3.25 + 1}rem`,
          }}
        />
      </div>

      {topics.map((topic, idx) => {
        const isChecked = checked[idx];
        return (
          <div
            key={idx}
            className="flex items-center mb-6 relative cursor-pointer select-none"
            onClick={() => handleCheck(idx)}
          >
            {/* Square checkbox */}
            <div
              className={`flex items-center justify-center w-7 h-7 border-2 transition-colors duration-300 rounded-sm ${
                isChecked
                  ? "bg-indigo-600 border-indigo-600"
                  : "bg-white border-gray-300 hover:border-indigo-600"
              }`}
            >
              {isChecked && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>

            {/* Label */}
            <span
              className={`ml-4 text-lg ${
                isChecked ? "text-indigo-700 font-semibold" : "text-gray-800"
              }`}
            >
              {topic}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default CourseRoadmap;
