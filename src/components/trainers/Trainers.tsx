import { useState } from "react";
import trainers from "../../data/trainers";
import TrainerCard from "./TrainerCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import type { Trainer } from "../../types/types.tsx";

function Trainers() {
  const [currentTrainer, setCurrentTrainer] = useState<number>(0);

  const handlePrev = () => {
    setCurrentTrainer(
      currentTrainer === 0 ? trainers.length - 1 : currentTrainer - 1
    );
  };

  const handleNext = () => {
    setCurrentTrainer(
      currentTrainer === trainers.length - 1 ? 0 : currentTrainer + 1
    );
  };

  return (
    <>
      <div id="trainers" className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col place-items-center mt-190 md:mt-80">
          <h3 className="text-3xl md:text-5xl text-lime-600 font-bold mb-10">
            MEET OUR TRAINERS
          </h3>
          <div className="relative">
            <IoIosArrowDropleftCircle
              className="absolute left-0 bottom-1/2 cursor-pointer z-1 text-white bg-neutral-800 hover:brightness-150 duration-200 ease-in-out rounded-full active:scale-98"
              size={55}
              onClick={handlePrev}
            />
            <div className="flex mx-6 mt-10">
              {trainers.map((trainer: Trainer, index: number) => (
                <div
                  key={trainer.id}
                  className={`${
                    currentTrainer === index ? "visible" : "hidden"
                  }`}
                >
                  <TrainerCard trainer={trainer} />
                </div>
              ))}
            </div>
            <IoIosArrowDroprightCircle
              className="absolute right-0 bottom-1/2 cursor-pointer z-1 text-white bg-neutral-800 hover:brightness-150 duration-200 ease-in-out rounded-full active:scale-98"
              size={55}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainers;
