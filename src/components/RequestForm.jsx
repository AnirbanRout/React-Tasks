import React from "react";

const InputField = React.memo(
  ({ type, name, placeholder, value, onChange }) => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
);

const SelectField = React.memo(
  ({ name, value, onChange, children }) => (
    <select name={name} value={value} onChange={onChange}>
      {children}
    </select>
  )
);

const TextAreaField = React.memo(
  ({ name, placeholder, value, onChange }) => (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
);

function RequestForm({ formData, onChange, onSubmit }) {
  console.log("RequestForm re-rendered");

  return (
    <div className="card">
      <h3>New Request Form</h3>

      <form onSubmit={onSubmit} className="form-grid">
        <InputField
          type="text"
          name="residentName"
          placeholder="Resident Name"
          value={formData.residentName}
          onChange={onChange}
        />

        <InputField
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={onChange}
        />

        <InputField
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={onChange}
        />

        <SelectField
          name="category"
          value={formData.category}
          onChange={onChange}
        >
          <option value="">Select Category</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Garbage Pickup">Garbage Pickup</option>
          <option value="Streetlight Issue">Streetlight Issue</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Drainage Blockage">Drainage Blockage</option>
        </SelectField>

        <SelectField
          name="priority"
          value={formData.priority}
          onChange={onChange}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </SelectField>

        <InputField
          type="date"
          name="visitDate"
          value={formData.visitDate}
          onChange={onChange}
        />

        <TextAreaField
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={onChange}
        />

        <button type="submit">Add Request</button>
      </form>
    </div>
  );
}

export default React.memo(RequestForm);