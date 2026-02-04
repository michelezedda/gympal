import { useState } from "react";
import ContactForm from "../../components/Modal";
import { useAppContext } from "../../context/AppContext";
import type { ClassCardProps } from "../../types/types.tsx";

function CCard({ c }: ClassCardProps) {
  const [loaded, setLoaded] = useState(false);
  const { isContactFormOpen, setIsContactFormOpen } = useAppContext();

  return (
    <>
      {isContactFormOpen && <ContactForm />}
      <div className="relative">
        <img
          src={c.img}
          alt={c.name}
          className={`opacity-30 transition-opacity duration-300 ${
            loaded ? "blur-none" : "blur-lg"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className="flex text-center gap-2 flex-col p-2">
          <h3 className="absolute w-full top-3 left-1/2 -translate-x-1/2 text-xl xl:text-2xl font-semibold">
            {c.name}
          </h3>
          <p className="absolute top-17 w-full p-1 left-1/2 -translate-x-1/2 text-sm sm:text-lg">
            {c.description}
          </p>
          <button
            className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[90%] text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 py-4 cursor-pointer shadow-md shadow-neutral-900 active:scale-98 font-semibold text-sm xl:text-lg"
            onClick={() => setIsContactFormOpen(true)}
          >
            SCHEDULE NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default CCard;
