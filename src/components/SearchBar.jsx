import React from "react";

function SearchBar({ searchText, onSearch }) {
  console.log("SearchBar re-rendered");

  return (
    <div className="card">
      <h3>Search Requests</h3>

      <input
        type="text"
        placeholder="Search by area or category"
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default React.memo(SearchBar);