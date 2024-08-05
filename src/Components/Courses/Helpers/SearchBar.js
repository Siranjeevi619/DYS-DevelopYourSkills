import React, { useState, useEffect } from "react";

const suggestionsList = ["React", "JavaScript", "CSS", "HTML", "MongoDB", "Node.js", "Express.js", "Python", "Django"];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = suggestionsList.filter((suggestion) => suggestion.toLowerCase().includes(query.toLowerCase()));
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]); 
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 position-relative">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search course" aria-label="Search" value={query} onChange={handleChange} />
              <button className="btn btn-outline-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
            {filteredSuggestions.length > 0 && (
              <ul className="list-group mt-2 position-absolute w-100" style={{ zIndex: 1000 }}>
                {filteredSuggestions.map((suggestion, index) => (
                  <li key={index} className="list-group-item" onClick={() => handleSuggestionClick(suggestion)} style={{ cursor: "pointer" }}>
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
