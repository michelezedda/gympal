import PlanCard from "../plans/PlanCard";
import plans from "../../data/plans";

function Plans() {
  return (
    <>
      <div className="flex flex-col place-items-center mt-20">
        <h3 className="text-4xl text-lime-600 font-bold">OUR PLANS</h3>
        <div className="flex flex-col lg:flex-row gap-20 mt-10">
          {plans.map((plan) => (
            <div key={plan.id}>
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Plans;
