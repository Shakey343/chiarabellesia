import { Link } from "react-router";
import Grid from "./Grid";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Grid genre="narrative" number={9} />
      <Link to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all narrative</Link>
      <Grid genre="commercial" number={3} />
      <Link to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all commercial</Link>
      <Grid genre="unscripted" number={3} />
      <Link to="index" className="opacity-80 sm:opacity-0 hover:opacity-100 transition-all duration-500 ease-out w-full h-40 flex justify-center items-center border border-black">see all unscripted</Link>
    </div>
  );
}

export default Home;
