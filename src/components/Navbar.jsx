import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className="fixed flex md:flex-row top-0 left-1/2 transform -translate-x-1/2 bg-neutral-950 px-4 py-2 sm:py-4 items-center justify-between w-full max-w-screen-lg shadow-md shadow-black z-30 gap-1">
        <Link to={"/"}>
          <div className="flex items-center gap-1">
            <img src="/media/logo.png" alt="GymPal logo" className="h-10" />
            <span className="text-lime-600 font-bold text-2xl">GymPal</span>
          </div>
        </Link>
        <div>
          {/* Menu Icon */}
          <div className="flex md:hidden">
            {isMenuOpen ? (
              <IoClose
                size={30}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <HiMenuAlt3
                size={30}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </div>
          {/* Mobile */}
          {isMenuOpen && (
            <ul className="md:hidden absolute top-16 rounded-2xl left-0 w-full flex flex-col gap-4 p-8 items-center text-neutral-300 font-semibold bg-neutral-800 shadow-md shadow-neutral-950 text-lg transition-transform duration-300 motion-preset-slide-down-sm">
              <Link to={"/"}>
                <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                  HOME
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                  ABOUT US
                </li>
              </Link>
              <Link to={"/classes"}>
                <li className="cursor-pointer hover:text-neutral-500 duration-200">
                  CLASSES
                </li>
              </Link>
              <Link to={"/plans"}>
                <li className="cursor-pointer hover:text-neutral-500 duration-200">
                  PLANS
                </li>
              </Link>
              <Link to={"/schedule"}>
                <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                  SCHEDULE
                </li>
              </Link>
            </ul>
          )}
          {/* Desktop */}
          <ul className="hidden md:flex gap-4 text-neutral-300 font-semibold">
            <Link to={"/"}>
              <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                About Us
              </li>
            </Link>
            <Link to={"/classes"}>
              <li className="cursor-pointer hover:text-neutral-500 duration-200">
                Classes
              </li>
            </Link>
            <Link to={"/plans"}>
              <li className="cursor-pointer hover:text-neutral-500 duration-200">
                Plans
              </li>
            </Link>
            <Link to={"/schedule"}>
              <li className="cursor-pointer  hover:text-neutral-500 duration-200">
                Schedule
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
