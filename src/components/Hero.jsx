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
      <div className="flex relative h-[100dvh] bg-[url(/media/background.png)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col text-center mx-auto max-w-screen-xl justify-center items-center">
          <h1 className="text-[100px] lg:text-[150px] leading-26 lg:leading-34 text-lime-600 font-black shadow-md">
            SCULPT YOUR BODY,
            <br />
            ELEVATE YOUR SOUL
          </h1>
          <div className="flex mt-10 gap-6 font-semibold">
            <button className="py-2 px-6 rounded-full bg-neutral-800 hover:bg-lime-700 hover:text-neutral-950 shadow-md shadow-black duration-300 active:scale-98 cursor-pointer text-xl lg:text-3xl">
              OUR CLASSES
            </button>
            <button
              className="py-2 px-2 rounded-full bg-neutral-800 hover:bg-lime-700 shadow-md hover:text-neutral-950 shadow-black duration-300 active:scale-98 cursor-pointer"
              onClick={handleClick}
            >
              <MdOutlineSlowMotionVideo className="size-10 lg:size-12" />
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
