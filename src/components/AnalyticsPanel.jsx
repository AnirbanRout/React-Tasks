import React, { useMemo } from "react";

function AnalyticsPanel({ requests }) {
  console.log("AnalyticsPanel re-rendered");

  const categoryCounts = useMemo(() => {
    const counts = {};

    for (let i = 0; i < 50000; i++) {
      requests.forEach((req) => {
        counts[req.category] = (counts[req.category] || 0) + 1;
      });
    }

    return counts;
  }, [requests]);

  return (
    <div className="card">
      <h3>Analytics Panel</h3>

      <ul>
        {Object.keys(categoryCounts).map((key) => (
          <li key={key}>
            {key}: {categoryCounts[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(AnalyticsPanel);