import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PlanCard({ plan }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setSelectedPlan(e.target.value);
    navigate("/checkout");
  };

  return (
    <>
      <div className="relative flex flex-col place-items-center w-80 h-90">
        <img src={plan.img} alt={plan.name} />
        <div className="absolute -bottom-10 flex flex-col items-center bg-neutral-950 py-4 px-10">
          <h4 className="font-bold text-xl mb-2">{plan.title.toUpperCase()}</h4>{" "}
          <span className="text-2xl mb-6">
            $<span className="text-5xl font-bold"> {plan.price} </span>p/m
          </span>
          <ul className="flex flex-col place-items-center gap-2">
            {Array.isArray(plan.perks) ? (
              plan.perks.map((perk, index) => <li key={index}>{perk}</li>)
            ) : (
              <li>{plan.perks}</li>
            )}
          </ul>
          <button
            className="bg-neutral-800 hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-10 font-semibold"
            onClick={handleClick}
            value={plan.id}
          >
            PURCHASE NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default PlanCard;
