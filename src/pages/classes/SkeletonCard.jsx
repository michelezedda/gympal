import React from "react";

function SkeletonCard() {
  return (
    <>
      <div className="relative h-76.5 bg-neutral-900">
        <div className="flex flex-col justify-center items-center p-4 animate-pulse">
          <div className="bg-neutral-300 rounded-full mt-0.5 mb-10 h-5 w-2/4"></div>
          <div className="bg-neutral-300 rounded-full mb-4 h-3 w-9/10"></div>
          <div className="bg-neutral-300 rounded-full mb-4 h-3 w-9/10"></div>
          <div className="bg-neutral-300 rounded-full mb-4 h-3 w-9/10"></div>
          <div className="bg-neutral-300 rounded-full mb-4 h-3 w-9/10"></div>
        </div>
        <button className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] bg-neutral-400 duration-300 py-6.5 shadow-md shadow-neutral-900 animate-pulse"></button>
      </div>
    </>
  );
}

export default SkeletonCard;
