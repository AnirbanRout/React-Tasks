import React from "react";
import RequestCard from "./RequestCard";

function RequestList({ requests, onViewDetails, onResolve }) {
  console.log("RequestList re-rendered");

  return (
    <div className="card">
      <h3>Request List</h3>

      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        requests.map((request) => (
          <RequestCard
            key={request.id}
            request={request}
            onViewDetails={onViewDetails}
            onResolve={onResolve}
          />
        ))
      )}
    </div>
  );
}

export default React.memo(RequestList);