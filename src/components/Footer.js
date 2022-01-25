import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      Contact
      <Link to="/">
        <p>Home</p>
      </Link>
      <a href="https://github.com/TaylorWill94/budget-app-frontend">
        <p>GitHub</p>
      </a>
    </footer>
  );
};

export default Footer;
