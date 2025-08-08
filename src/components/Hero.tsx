import { useState } from "react";
import { IoClose, IoPlaySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import Cards from "./Cards";

function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Function to open the video
  const handleClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <>
      <div className="flex relative h-[100dvh] bg-[url(/media/background.webp)] bg-center xl:bg-left bg-cover bg-no-repeat">
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-b from-transparent to-neutral-950" />
        <div className="flex flex-col justify-center items-center lg:items-start top-16 border-neutral-500 lg:border-r-2 lg:border-b-2 lg:h-[90dvh] lg:w-[80dvw] shadow-2xl lg:shadow-black brightness-130">
          <h1 className="flex flex-col text-6xl md:text-7xl leading-18 md:leading-22 text-lime-600 font-black shadow-md font-[Rubik_Glitch] mx-4 lg:ml-20 lg:mr-20 text-center lg:text-start">
            SCULPT YOUR BODY,
            <br />
            ELEVATE YOUR SOUL
          </h1>
          <div className="flex mt-16 gap-6 lg:ml-21">
            <a href="/#plans">
              <button className="py-2 px-6 bg-neutral-800 hover:bg-lime-700 hover:text-neutral-950 shadow-md shadow-black duration-300 active:scale-98 cursor-pointer text-lg md:text-xl lg:text-2xl">
                JOIN NOW
              </button>
            </a>
            <button
              className="py-2 px-4 bg-neutral-800 hover:bg-lime-700 shadow-md hover:text-neutral-950 shadow-black duration-300 active:scale-98 cursor-pointer text-xl lg:text-2xl"
              onClick={handleClick}
            >
              <IoPlaySharp />
            </button>
          </div>
          <div className="hidden lg:absolute lg:flex lg:flex-col lg:bottom-2 lg:-right-15 lg:gap-2">
            <Link
              to="https://www.facebook.com/"
              className=" rounded-full bg-neutral-400 p-3 text-black hover:bg-lime-600 duration-300 ease-in-out"
            >
              <FaSquareFacebook
                className="cursor-pointer duration-300 ease-in-out"
                size={24}
              />
            </Link>
            <Link
              to="https://www.instagram.com/"
              className=" rounded-full bg-neutral-400 p-3 text-black hover:bg-lime-600 duration-300 ease-in-out"
            >
              <FaInstagram
                className="cursor-pointer duration-300 ease-in-out"
                size={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-30 flex items-center justify-center bg-black/90 bg-opacity-80 ${
          isVideoOpen ? "flex" : "hidden"
        }`}
      >
        <IoClose
          size="50"
          className="absolute top-5 right-5 text-white cursor-pointer z-30"
          onClick={() => setIsVideoOpen(false)}
        />
        <video
          controls
          autoPlay
          muted
          className="w-full h-full max-w-screen max-h-screen"
        >
          <source src="/media/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Cards />
    </>
  );
}

export default Hero;
