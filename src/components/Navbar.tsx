import { Link } from "react-router";
import Container from "./Container";
import greenUnderline from "../assets/green-underline.svg";
import orangeArrow from "../assets/orange-arrow.svg";
import redCircle from "../assets/red-circle.svg";

const Navbar = () => {
  return (
    <Container className="w-full flex justify-between mb-10">
      <div className="text-4xl">
        <Link to="/" className="group relative">
          Chiara Bellesia
          <img
            src={greenUnderline}
            alt=""
            className="absolute scale-75 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </Link>
      </div>
      <div className="text-3xl flex justify-between gap-8">
        <Link to="about" className="group relative">
          about
          <img
            src={orangeArrow}
            alt=""
            className="absolute bottom-2 right-20 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </Link>
        <span>/</span>
        <Link to="index" className="group relative">
          all projects
          <img
            src={redCircle}
            alt=""
            className="absolute -bottom-2 scale-125 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
