import React from "react";

function Banner() {
  return (
    <>
      <div className="flex flex-col place-items-center bg-[url(/media/banner.png)] bg-cover bg-center bg-no-repeat py-30 font-semibold text-2xl">
        <h3>Need a Fitness Trainer?</h3>
        <p>
          Call{" "}
          <span className="text-lime-600 font-bold cursor-pointer hover:underline">
            +1 (123) 456-7890
          </span>
        </p>
      </div>
    </>
  );
}

export default Banner;
