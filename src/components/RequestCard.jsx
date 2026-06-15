import React from "react";

const RequestCard = React.memo(
  ({ request, onViewDetails, onResolve }) => {
    console.log("RequestCard re-rendered:", request.id);

    return (
      <div className="request-card">
        <h4>{request.category}</h4>

        <p>
          <strong>Resident:</strong> {request.residentName}
        </p>

        <p>
          <strong>Area:</strong> {request.area}
        </p>

        <p>
          <strong>Status:</strong> {request.status}
        </p>

        <p>
          <strong>Priority:</strong> {request.priority}
        </p>

        <div className="btn-group">
          <button onClick={() => onViewDetails(request)}>
            View Details
          </button>

          <button onClick={() => onResolve(request.id)}>
            Mark Resolved
          </button>
        </div>
      </div>
    );
  }
);

export default RequestCard;