function TrainersCard({ trainer }) {
  return (
    <>
      <div className="flex relative bg-lime-600 rounded-full p-34">
        <img
          src={trainer.pic}
          alt={trainer.name}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 h-80 grayscale-100 hover:grayscale-0 duration-200 cursor-pointer"
        />
        <div className="flex flex-col absolute left-1/2 -bottom-5 -translate-x-1/2 bg-neutral-800 rounded-full w-full py-2 text-center">
          <span className="font-semibold text-xl">
            {trainer.name.toUpperCase()}
          </span>
          <span>{trainer.class}</span>
        </div>
      </div>
    </>
  );
}

export default TrainersCard;
