import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright - 2005 - Aaron Hou</p>
      {/* <a href="/about">About</a> */}
      <Link className="link" to="/About">
        About
      </Link>
    </footer>
  );
};

export default Footer;
