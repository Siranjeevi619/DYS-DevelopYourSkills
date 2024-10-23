import React, { useState, useEffect } from "react";
// import { useAsyncError } from "react-router";
import CoursesList from "./CourseData.js";

// const suggestionsList = [
//   "React",
//   "JavaScript",
//   "CSS",
//   "HTML",
//   "MongoDB",
//   "Node.js",
//   "Express.js",
//   "Python",
//   "Django",
// ];

function SearchBar() {
  const [courseTitles, setCourseTitles] = useState([]);

  const [suggestion, setSuggestion] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [query, setQuery] = useState("");
  // const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    setCourseTitles(CoursesList.map((course) => course.CourseName));
    // if (query) {
    //   const filtered = suggestionsList.filter((suggestion) =>
    //     suggestion.toLowerCase().includes(query.toLowerCase())
    //   );
    //   setFilteredSuggestions(filtered);
    // } else {
    //   setFilteredSuggestions([]);
    // }

    if (searchInput) {
      const filteredCourses = courseTitles.filter((inputCourses) =>
        inputCourses.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestion(filteredCourses);
    } else {
      setSuggestion([]);
    }
  }, [searchInput]);

  const handleChange = (e) => {
    // setQuery(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    // setQuery(suggestion);
    // setFilteredSuggestions([]);
    setSearchInput(suggestion);
    setSuggestion([]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 position-relative">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search course"
                aria-label="Search"
                value={searchInput}
                onChange={handleChange}
              />
              <button className="btn btn-outline-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
            {/* {filteredSuggestions.length > 0 && (
              <ul
                className="list-group mt-2 position-absolute w-100"
                style={{ zIndex: 1000 }}
              >
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ cursor: "pointer" }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )} */}

            {suggestion.length > 0 && (
              <ul
                className="list-group mt-2 position-absolute w-100"
                style={{ zIndex: 1000 }}
              >
                {suggestion.map((suggestion, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{ cursor: "pointer" }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
