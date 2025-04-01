import React from "react";

function Gallery() {
  return (
    <>
      <>
        <div className="container mx-auto max-w-screen-lg">
          <div className="flex flex-col place-items-center mt-34 2xl:mt-40">
            <h3 className="text-4xl lg:text-6xl text-lime-600 font-bold mb-8">
              TAKE A CLOSER LOOK
            </h3>
            <div className="grid grid-cols-2 gap-1">
              <img
                src="/media/gallery1.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
              <img
                src="/media/gallery7.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
              <img
                src="/media/gallery2.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
              <img
                src="/media/gallery3.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
              <img
                src="/media/gallery4.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
              <img
                src="/media/gallery5.png"
                className="w-full h-auto hover:scale-110 duration-200"
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Gallery;
