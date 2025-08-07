import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { TrainerCardProps } from "../../types/types.tsx";

function TrainersCard({ trainer }: TrainerCardProps) {
  return (
    <>
      <div className="flex relative">
        <img src="/media/frame.png" className="h-100" />
        <img
          src={trainer.pic}
          alt={trainer.name}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-full grayscale-100 hover:grayscale-0 duration-200"
        />
        <div className="flex flex-col absolute left-1/2 -bottom-5 -translate-x-1/2 bg-neutral-800 w-full py-3 text-center gap-2 shadow-lg shadow-black">
          <h3 className="font-semibold text-2xl">{trainer.name}</h3>
          <p>{trainer.class}</p>
          <span className="flex gap-4 justify-center items-center text-lg mt-1">
            <FaFacebook className="hover:text-lime-600 duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-lime-600 duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-lime-600 duration-300 cursor-pointer" />
            <FaXTwitter className="hover:text-lime-600 duration-300 cursor-pointer" />
          </span>
        </div>
      </div>
    </>
  );
}

export default TrainersCard;
