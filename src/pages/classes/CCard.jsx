import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function CCard({ c }) {
  const [loaded, setLoaded] = useState(false);

  // Toaster
  const handleClick = () => {
    toast.error(
      "Demo mode: Activated. Scheduling classes: Deactivated. Your gains: Pending."
    );
  };

  return (
    <>
      <div className="relative min-h-85">
        <img
          src={c.img}
          alt={c.name}
          className={`transition-opacity duration-300 ${
            loaded ? "opacity-30" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="flex text-center gap-2 flex-col p-2">
          <h4 className="absolute w-full top-3 left-1/2 -translate-x-1/2 text-xl xl:text-2xl font-semibold">
            {c.name}
          </h4>
          <p className="absolute top-17 w-full p-1 left-1/2 -translate-x-1/2 text-sm sm:text-lg">
            {c.description}
          </p>
          <button
            className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[90%] text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 py-2 cursor-pointer shadow-md shadow-neutral-900 active:scale-98 font-semibold text-xs xl:text-lg"
            onClick={handleClick}
          >
            SCHEDULE NOW
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default CCard;
