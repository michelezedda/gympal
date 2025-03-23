import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function PlanCard({ plan }) {
  const navigate = useNavigate();
  const { setSelectedPlan } = useAppContext();

  // Set the selected plan and navigate to the checkout page
  const handleClick = () => {
    setSelectedPlan(plan);
    navigate("/checkout");
  };

  return (
    <>
      <div className="relative flex flex-col place-items-center w-78.5 h-90">
        <img src={plan.img} alt={plan.name} />
        <div className="absolute -bottom-30 flex flex-col justify-center items-center bg-neutral-950 py-4 px-10 w-72 h-80">
          <h4 className="absolute top-5 font-bold text-xl mb-2">
            {plan.title.toUpperCase()}
          </h4>
          <span className="absolute top-15 text-2xl mb-6">
            $<span className="text-5xl font-bold"> {plan.price} </span>p/m
          </span>
          <ul className="absolute top-35 flex flex-col place-items-center gap-2">
            {Array.isArray(plan.perks) ? (
              plan.perks.map((perk, index) => <li key={index}>{perk}</li>)
            ) : (
              <li>{plan.perks}</li>
            )}
          </ul>
          <button
            className="absolute bottom-10 bg-neutral-800 hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-10 font-semibold"
            onClick={handleClick}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
}

export default PlanCard;
