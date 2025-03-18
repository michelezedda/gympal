import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed flex flex-col md:flex-row top-4 left-1/2 transform -translate-x-1/2 bg-neutral-800 rounded-full px-4 py-1 md:py-2 items-center justify-between w-full max-w-11/12 shadow-md shadow-neutral-950 z-30 gap-1">
        <div className="flex items-center gap-1">
          <img src="/media/logo.png" alt="GymPal logo" className="h-10" />
          <span className="text-lime-600 font-bold text-2xl">GymPal</span>
        </div>
        <div>
          <ul className="flex gap-4 text-neutral-300">
            <Link to={"/"}>
              <li className="cursor-pointer hover:font-semibold">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="cursor-pointer hover:font-semibold">About Us</li>
            </Link>
            <Link to={"/classes"}>
              <li className="cursor-pointer hover:font-semibold">Classes</li>
            </Link>
            <Link to={"/plans-page"}>
              <li className="cursor-pointer hover:font-semibold">Plans</li>
            </Link>
            <Link to={"/schedule"}>
              <li className="cursor-pointer hover:font-semibold">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
