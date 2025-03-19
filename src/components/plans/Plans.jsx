import PlanCard from "../plans/PlanCard";
import plans from "../../data/plans";

function Plans() {
  return (
    <>
      <div className="flex flex-col place-items-center mt-20 2xl:mt-40">
        <h3 className="text-4xl lg:text-6xl text-lime-600 font-bold">
          OUR PLANS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-40 gap-x-10 mt-10 mb-20">
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
