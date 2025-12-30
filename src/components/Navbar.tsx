import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-15">
      <Link to="/" className="text-4xl">
        Chiara Bellesia
      </Link>
      <div className="text-3xl">
        <Link to="about">about</Link>&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;
        <Link to="index">all projects</Link>
      </div>
    </div>
  );
};

export default Navbar;
