import React from "react";

function RequestForm({ formData, onChange, onSubmit }) {
  console.log("RequestForm re-rendered");

  const {
    residentName,
    mobile,
    area,
    category,
    priority,
    visitDate,
    description,
  } = formData;

  return (
    <div className="card">
      <h3>New Request Form</h3>

      <form onSubmit={onSubmit} className="form-grid">
        <input
          type="text"
          name="residentName"
          placeholder="Resident Name"
          value={residentName}
          onChange={onChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={mobile}
          onChange={onChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={area}
          onChange={onChange}
        />

        <select name="category" value={category} onChange={onChange}>
          <option value="">Select Category</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Garbage Pickup">Garbage Pickup</option>
          <option value="Streetlight Issue">Streetlight Issue</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Drainage Blockage">Drainage Blockage</option>
        </select>

        <select name="priority" value={priority} onChange={onChange}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input
          type="date"
          name="visitDate"
          value={visitDate}
          onChange={onChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={onChange}
        />

        <button type="submit">Add Request</button>
      </form>
    </div>
  );
}

export default React.memo(RequestForm);
