import trainers from "../../data/trainers";
import TrainerCard from "./TrainerCard";

function Trainers() {
  return (
    <>
      <div className="flex flex-col place-items-center my-10">
        <h3 className="text-4xl text-lime-600 font-bold">OUR TRAINERS</h3>
        <div className="flex flex-col lg:flex-row gap-20 mt-20">
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
