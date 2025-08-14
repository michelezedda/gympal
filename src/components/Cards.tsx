import { MdSportsGymnastics } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { Link } from "react-router-dom";
import type { SingleCardProps } from "../types/types.tsx";

const Cards = () => {
  return (
    <section className="flex flex-col md:flex-row absolute -bottom-160 md:-bottom-40  inset-x-0 mx-auto gap-4 lg:gap-8 w-max text-black">
      <Link to={"/classes"}>
        <SingleCard title="DISCOVER OUR CLASSES" Icon={GiGymBag} />
      </Link>
      <a href="/#trainers">
        <SingleCard title="TEAM OF EXPERT COACHES" Icon={MdSportsGymnastics} />
      </a>
      <a href="/#bmi">
        <SingleCard title="WANT TO KNOW YOUR BMI?" Icon={FaWeightScale} />
      </a>
    </section>
  );
};

export default Cards;

const SingleCard = ({ title, Icon }: SingleCardProps) => {
  return (
    <>
      <div className="h-60 w-100 md:w-60 xl:w-100 bg-neutral-300 hover:bg-neutral-900 rounded-tl-2xl rounded-br-2xl p-4 flex flex-col justify-center items-center gap-6 text-2xl text-center font-medium text-neutral-950 hover:text-lime-600 duration-300 cursor-pointer shadow-xl shadow-black">
        <Icon size={100} /> {title}
      </div>
    </>
  );
};
