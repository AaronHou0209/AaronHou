import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h5>Version 1.0.0</h5>
      {/* <a href="">Go Back</a> */}
      <Link className="link" to="/">
        Go Back
      </Link>
    </div>
  );
};
export default About;
