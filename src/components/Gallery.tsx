import { useState } from "react";
import gallery from "../data/gallery";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { GalleryItem } from "../types/types.tsx";

function Gallery() {
  const [selected, setSelected] = useState<boolean>(false);
  const [currentPic, setCurrentPic] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentPic((prevPic) =>
      prevPic === 0 ? gallery.length - 1 : prevPic - 1
    );
  };

  const handleNext = () => {
    setCurrentPic((prevPic) =>
      prevPic === gallery.length - 1 ? 0 : prevPic + 1
    );
  };

  return (
    <section className="container mx-auto max-w-screen-lg">
      <div className="flex flex-col place-items-center mt-34 2xl:mt-40">
        <h2 className="text-3xl md:text-5xl text-lime-600 font-bold mb-8">
          TAKE A CLOSER LOOK
        </h2>
        <div className="grid grid-cols-2 gap-1">
          {gallery.map((galleryItem: GalleryItem, index: number) => (
            <img
              key={galleryItem.id}
              src={galleryItem.img}
              alt={galleryItem.title}
              className="w-full h-auto hover:scale-110 duration-200 cursor-pointer"
              onClick={() => {
                setCurrentPic(index);
                setSelected(true);
              }}
            />
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white text-3xl cursor-pointer"
                onClick={() => setSelected(false)}
              >
                <IoClose size={40} />
              </button>
              <IoIosArrowBack
                size={30}
                className="absolute left-3 top-1/2 cursor-pointer hover:scale-150 duration-500"
                onClick={handlePrevious}
              />
              <img
                src={gallery[currentPic]?.img}
                alt={gallery[currentPic]?.title}
                className="max-w-screen max-h-screen md:max-w-[90vh] md:max-h-[90vh]"
              />
              <IoIosArrowForward
                size={30}
                className="absolute right-3 top-1/2 cursor-pointer hover:scale-150 duration-500"
                onClick={handleNext}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
