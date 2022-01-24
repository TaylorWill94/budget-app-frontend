import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="app-name">Budget Bae</h1>
      <Link to="/">
        <button className="nav-items">Home</button>
      </Link>
      <Link to="/transactions">
        <button className="nav-items">View Budget</button>
      </Link>
      <Link to="/transactions/new">
        <button className="nav-items">New Budget</button>
      </Link>
    </nav>
  );
};

export default NavBar;
