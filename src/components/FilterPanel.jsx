import React from "react";

function FilterPanel({ statusFilter, sortBy, onStatusChange, onSortChange }) {
  console.log("FilterPanel re-rendered");

  return (
    <div className="card">
      <h3>Filters</h3>

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="Assigned">Assigned</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priority">Priority</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
}

export default React.memo(FilterPanel);
