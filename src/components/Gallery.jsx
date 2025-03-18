import React from "react";

function Gallery() {
  return (
    <>
      <>
        <div className="flex flex-col place-items-center mt-30 mb-10">
          <h3 className="text-4xl text-lime-600 font-bold mb-8">OUR GALLERY</h3>
          <div className="grid grid-cols-2 gap-1">
            <img src="/media/gallery1.png" className="w-full h-auto" />
            <img src="/media/gallery7.png" className="w-full h-auto" />
            <img src="/media/gallery2.png" className="w-full h-auto" />
            <img src="/media/gallery3.png" className="w-full h-auto" />
            <img src="/media/gallery4.png" className="w-full h-auto" />
            <img src="/media/gallery5.png" className="w-full h-auto" />
          </div>
        </div>
      </>
    </>
  );
}

export default Gallery;
