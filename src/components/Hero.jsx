import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const navigate = useNavigate();

  // Function to open the video
  const handleClick = () => {
    setIsVideoOpen(true);
  };

  return (
    <>
      <div className="flex relative h-[100dvh] bg-[url(/media/background.png)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col text-center mx-auto max-w-screen-lg justify-center items-center">
          <h1 className="text-[74px] lg:text-[98px] leading-20 lg:leading-24 text-lime-600 font-black shadow-md">
            SCULPT YOUR BODY,
            <br />
            ELEVATE YOUR SOUL
          </h1>
          <div className="flex mt-10 gap-6 font-semibold">
            <button
              className="py-2 px-6 bg-neutral-800 hover:bg-lime-700 hover:text-neutral-950 shadow-md shadow-black duration-300 active:scale-98 cursor-pointer text-xl lg:text-2xl"
              onClick={() => navigate("/plans")}
            >
              JOIN NOW
            </button>
            <button
              className="py-2 px-6 bg-neutral-800 hover:bg-lime-700 shadow-md hover:text-neutral-950 shadow-black duration-300 active:scale-98 cursor-pointer text-xl lg:text-2xl"
              onClick={handleClick}
            >
              WATCH VIDEO
            </button>
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
    </>
  );
}

export default Hero;
