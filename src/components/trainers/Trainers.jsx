import trainers from "../../data/trainers";
import TrainerCard from "./TrainerCard";

function Trainers() {
  return (
    <>
      <div className="flex flex-col place-items-center mt-10">
        <h3 className="text-4xl lg:text-6xl text-lime-600 font-bold mb-2 2xl:mb-10">
          OUR TRAINERS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-10 2xl:gap-x-20 gap-y-20 xl:gap-y-40 mt-20">
          {trainers.map((trainer) => (
            <div key={trainer.id}>
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Trainers;
