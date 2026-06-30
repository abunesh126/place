// Sidebar shows the same on every page (Add Student, Show Student, etc.)
// "Link" works like an <a> tag, but it does NOT reload the whole page.

import { Link } from "react-router-dom";
import "../Pages/css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Menu</h1>

      <Link className="sidebar-link" to="/show-student">
        Show Students
      </Link>

      <Link className="sidebar-link" to="/add-student">
        Add Student
      </Link>
    </div>
  );
}

export default Sidebar;
