import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ active, setActive }) {
  const location = useLocation();

  return (
    <div className={`sidebar ${location.pathname === "/" ? "active" : ""}`}>
      <ul>
        <li className={active === "Dashboard" ? "active" : ""}>
          <Link to="/" onClick={() => setActive("Dashboard")}>
            Dashboard
          </Link>
        </li>
        <li className={active === "Profile" ? "active" : ""}>
          <Link to="/profile" onClick={() => setActive("Profile")}>
            Profile
          </Link>
        </li>
        <li className={active === "Settings" ? "active" : ""}>
          <Link to="/settings" onClick={() => setActive("Settings")}>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
