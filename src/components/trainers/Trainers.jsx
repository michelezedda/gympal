import trainers from "../../data/trainers";
import TrainerCard from "./TrainerCard";

function Trainers() {
  return (
    <>
      <div className="flex flex-col place-items-center mt-20">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl text-lime-600 font-bold mb-15 xl:mb-6 2xl:mb-20">
          MEET OUR TRAINERS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-2 gap-y-40 xl:gap-y-15 2xl:gap-y-50 mt-20">
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
