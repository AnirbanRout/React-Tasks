import React from "react";

function ReportPanel({ selectedRequest }) {
  console.log("ReportPanel re-rendered");

  if (!selectedRequest) {
    return (
      <div className="card">
        <h3>Resolution Report</h3>
        <p>Select a request to view report preview</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Resolution Report Preview</h3>

      <p><strong>ID:</strong> {selectedRequest.id}</p>
      <p><strong>Resident:</strong> {selectedRequest.residentName}</p>
      <p><strong>Area:</strong> {selectedRequest.area}</p>
      <p><strong>Category:</strong> {selectedRequest.category}</p>
      <p><strong>Description:</strong> {selectedRequest.description}</p>
      <p><strong>Status:</strong> {selectedRequest.status}</p>
      <p><strong>Assigned Worker:</strong> {selectedRequest.assignedWorker}</p>
    </div>
  );
}

export default React.memo(ReportPanel);