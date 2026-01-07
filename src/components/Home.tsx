import { NavLink } from "react-router";
import Grid from "./Grid";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Grid genre="narrative" number={6} />
      <NavLink to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all narrative</NavLink>
      <Grid genre="commercial" number={2} />
      <NavLink to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all commercial</NavLink>
      <Grid genre="unscripted" number={2} />
      <NavLink to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all unscripted</NavLink>
    </div>
  );
}

export default Home;
