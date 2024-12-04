import React, { useState } from "react";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1>Enter Your Details</h1>
      {/* Form Element */}
      <form onSubmit={handleSubmit}>
        {/* Full Name Label and Input */}
        <label htmlFor="firstName">Full Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        {/* Last Name Label and Input */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Display Full Name */}
      {fullName && <h2>Full Name: {fullName}</h2>}
    </div>
  );
};

export default FullNameForm;
