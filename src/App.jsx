import React, { useState, useMemo, useCallback, lazy, Suspense } from "react";
import { requests as initialRequests } from "./data/requests";

import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import SummaryCards from "./components/SummaryCards";
import RequestList from "./components/RequestList";
import RequestForm from "./components/RequestForm";

const AnalyticsPanel = lazy(() => import("./components/AnalyticsPanel"));

const ReportPanel = lazy(() => import("./components/ReportPanel"));

function App() {
  console.log("App re-rendered");

  const [requests, setRequests] = useState(initialRequests);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [formData, setFormData] = useState({
    residentName: "",
    mobile: "",
    area: "",
    category: "",
    description: "",
    priority: "",
    visitDate: "",
  });

  const filteredRequests = useMemo(() => {
    let filtered = requests.filter((req) => {
      return (
        req.area.toLowerCase().includes(searchText.toLowerCase()) ||
        req.category.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    if (statusFilter) {
      filtered = filtered.filter((req) => req.status === statusFilter);
    }

    if (sortBy === "priority") {
      filtered = [...filtered].sort((a, b) =>
        a.priority.localeCompare(b.priority),
      );
    }

    if (sortBy === "date") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    }

    return filtered;
  }, [requests, searchText, statusFilter, sortBy]);

  const handleSearch = useCallback((value) => {
    setSearchText(value);
  }, []);

  const handleStatusChange = useCallback((value) => {
    setStatusFilter(value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleViewDetails = useCallback((request) => {
    setSelectedRequest(request);
  }, []);

  const handleResolve = useCallback(
    (id) => {
      const updated = requests.map((req) =>
        req.id === id ? { ...req, status: "Resolved" } : req,
      );

      setRequests(updated);
    },
    [requests],
  );

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newRequest = {
        id: requests.length + 1,
        residentName: formData.residentName,
        area: formData.area,
        category: formData.category,
        description: formData.description,
        priority: formData.priority,
        status: "Open",
        assignedWorker: "N/A",
        createdAt: new Date().toISOString().split("T")[0],
      };

      setRequests((prev) => [...prev, newRequest]);

      setFormData({
        residentName: "",
        mobile: "",
        area: "",
        category: "",
        description: "",
        priority: "",
        visitDate: "",
      });
    },
    [formData, requests],
  );

  return (
    <div className="app-container">
      <h1>Neighborhood Service Request Dashboard - Optimization Lab</h1>

      <SummaryCards requests={requests} />

      <SearchBar searchText={searchText} onSearch={handleSearch} />

      <FilterPanel
        statusFilter={statusFilter}
        sortBy={sortBy}
        onStatusChange={handleStatusChange}
        onSortChange={handleSortChange}
      />

      <RequestForm
        formData={formData}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />

      <RequestList
        requests={filteredRequests}
        onViewDetails={handleViewDetails}
        onResolve={handleResolve}
      />

      <Suspense fallback={<p>Loading Analytics...</p>}>
        <AnalyticsPanel requests={requests} />
      </Suspense>

      <Suspense fallback={<p>Loading Report...</p>}>
        <ReportPanel selectedRequest={selectedRequest} />
      </Suspense>
    </div>
  );
}

export default App;
