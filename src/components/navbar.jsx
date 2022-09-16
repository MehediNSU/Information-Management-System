import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex-row navbar">
      <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
        <NavLink style={{ textDecoration: "none" }} to="/createperson">
          <text>Create Person</text>
        </NavLink>
      </div>

      <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
        <Link style={{ textDecoration: "none" }} to="/listview">
          <text>Person List</text>
        </Link>
      </div>

      <div className="margin-right card shadow-lg p-3 mb-5 bg-white rounded">
        <Link style={{ textDecoration: "none" }} to="/searchlistview">
          <text>Search Person</text>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
