import { useState } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleClick = () => {
    setIsVideoOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex relative h-270 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black pt-30">
        <div className="flex flex-col text-center mx-auto max-w-screen-xl items-center">
          <h1 className="text-7xl text-lime-600 font-black shadow-md">
            SCULPT YOUR BODY,
            <br />
            ELEVATE YOUR SOUL
          </h1>
          <div className="flex mt-10 gap-6">
            <button className="py-2 px-6 rounded-full bg-neutral-800 hover:bg-lime-700 shadow-md shadow-black duration-300 active:scale-98 cursor-pointer">
              OUR CLASSES
            </button>
            <button
              className="py-2 px-3 rounded-full bg-neutral-800 hover:bg-lime-700 shadow-md shadow-black duration-300 active:scale-98 cursor-pointer"
              onClick={handleClick}
            >
              <MdOutlineSlowMotionVideo size="30" />
            </button>
          </div>
        </div>
        <img
          src="/media/hero-pic.png"
          alt=""
          className="absolute left-1/2 lg:left-2/6 bottom-0 -translate-x-1/2 lg:h-220"
        />
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
    </>
  );
}

export default Hero;
