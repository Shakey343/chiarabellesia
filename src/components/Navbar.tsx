import { NavLink } from "react-router";
import Container from "./Container";
import greenUnderline from "../assets/green-underline.svg";
import orangeArrow from "../assets/orange-arrow.svg";
import redCircle from "../assets/red-circle.svg";

const Navbar = () => {
  return (
    <Container className="w-full flex justify-between mb-10">
      <div className="text-2xl sm:text-4xl">
        <NavLink to="/" className="group relative">
          Chiara Bellesia
          <img
            src={greenUnderline}
            alt=""
            className="absolute scale-75 active:opacity-80 sm:opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </NavLink>
      </div>
      <div className="text-sm sm:text-3xl flex justify-between items-center gap-2 sm:gap-8">
        <NavLink to="about" className="group relative">
          about
          <img
            src={orangeArrow}
            alt=""
            className="absolute bottom-1 right-12 sm:right-20 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </NavLink>
        <span>/</span>
        <NavLink to="index" className="group relative">
          all projects
          <img
            src={redCircle}
            alt=""
            className="absolute -bottom-1 sm:-bottom-3 scale-125 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          />
        </NavLink>
      </div>
    </Container>
  );
};

export default Navbar;
