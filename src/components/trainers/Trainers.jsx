import { useState } from "react";
import trainers from "../../data/trainers";
import TrainerCard from "./TrainerCard";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function Trainers() {
  const [currentTrainer, setCurrentTrainer] = useState(0);

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
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col place-items-center mt-20">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl text-lime-600 font-bold mb-10">
            MEET OUR TRAINERS
          </h3>
          <div className="relative">
            <IoIosArrowDropleftCircle
              className="absolute left-0 bottom-1/2 cursor-pointer z-1 text-white bg-neutral-800 hover:brightness-150 duration-200 ease-in-out rounded-full active:scale-98"
              size={55}
              onClick={handlePrev}
            />
            <div className="flex mx-6 mt-10">
              {trainers.map((trainer, index) => (
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
