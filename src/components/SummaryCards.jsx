import React, { useMemo } from "react";

function SummaryCards({ requests }) {
  console.log("SummaryCards re-rendered");

  const { total, openCount, resolvedCount, highPriority } = useMemo(() => {
    let open = 0;
    let resolved = 0;
    let high = 0;

    requests.forEach((r) => {
      if (r.status === "Open") open++;
      if (r.status === "Resolved") resolved++;
      if (r.priority === "High") high++;
    });

    return {
      total: requests.length,
      openCount: open,
      resolvedCount: resolved,
      highPriority: high,
    };
  }, [requests]);

  return (
    <div className="summary-grid">
      <div className="summary-card">Total Requests: {total}</div>
      <div className="summary-card">Open: {openCount}</div>
      <div className="summary-card">Resolved: {resolvedCount}</div>
      <div className="summary-card">High Priority: {highPriority}</div>
    </div>
  );
}

export default React.memo(SummaryCards);