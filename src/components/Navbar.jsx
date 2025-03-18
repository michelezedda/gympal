import React from "react";

function Navbar() {
  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-neutral-800 rounded-full p-4 flex items-center justify-between w-full max-w-11/12 shadow-md shadow-neutral-950 z-30">
        <div className="flex items-center gap-1">
          <img src="/media/logo.png" alt="GymPal logo" className="h-10" />
          <span className="text-lime-600 font-bold text-2xl">GymPal</span>
        </div>
        <div>
          <ul className="flex gap-2 text-neutral-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Classes</li>
            <li>Plans</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
