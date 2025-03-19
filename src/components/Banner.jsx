import React from "react";

function Banner() {
  return (
    <>
      <div className="flex flex-col place-items-center bg-[url(/media/banner.png)] bg-cover bg-center lg:bg-[50%_1%] bg-no-repeat py-30 2xl:py-50 font-semibold text-2xl lg:text-4xl xl:text-5xl xl:leading-16 mt-20">
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
