import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  // Initialize state for user data and input values
  const [user, setUser] = useState({
    name: "Hazrat Ali",
    email: "hazrat@gmail.com",
  });
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [message, setMessage] = useState("");

  // Handle form submission to update user information
  const handleUpdate = (e) => {
    e.preventDefault();

    // Update the user state with new name and email
    setUser({ name, email });
    setMessage("Profile updated successfully!"); // Display confirmation message

    // Clear the confirmation message after a few seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      {/* Display message on successful update */}
      {message && <p className="update-message">{message}</p>}

      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Profile;
