import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>AddCart</h1>
      <div className="links">
        
          <Link
          to="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Home
        </Link>

        <Link
          to="/users"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Users
        </Link>
        <Link
          to="/blogs"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Blogs
        </Link>
        
        
      </div>
    </nav>
  );
};

export default Navbar;
