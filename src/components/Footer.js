import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      Contact
      <Link to="/">
        <p>Home</p>
      </Link>
      <a href="https://www.linkedin.com/in/taylor-williams-a0683795/">
        <p>GitHub</p>
      </a>
    </footer>
  );
};

export default Footer;
