import { useState } from "react";
import gallery from "../data/gallery";
import { IoClose } from "react-icons/io5";
import type { GalleryItem } from "../types/types.tsx";

function Gallery() {
  const [selected, setSelected] = useState<boolean>(false);
  const [currentPic, setCurrentPic] = useState<number>(0);

  return (
    <div className="container mx-auto max-w-screen-lg">
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
              <img
                src={gallery[currentPic].img}
                alt={gallery[currentPic].title}
                className="max-w-screen max-h-screen md:max-w-[90vh] md:max-h-[90vh]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
