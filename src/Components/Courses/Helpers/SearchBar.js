import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [courseTitles, setCourseTitles] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:8080/course/");
        console.log(res.data.data);
        const titles = res.data.data.map((course) => course.courseName);
        setCourseTitles(titles);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filteredCourses = courseTitles.filter((inputCourse) =>
        inputCourse.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestion(filteredCourses);
    } else {
      setSuggestion([]);
    }
  }, [searchInput, courseTitles]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
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
