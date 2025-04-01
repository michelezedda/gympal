import PlanCard from "../plans/PlanCard";
import plans from "../../data/plans";

function Plans() {
  return (
    <>
      <div className="flex flex-col place-items-center mt-30 xl:mt-40 bg-neutral-700 pt-25 md:pt-55 pb-45 md:pb-75 -skew-y-10">
        <div className="mx-auto max-w-screen-lg skew-y-10 flex flex-col items-center justify-center">
          <h3 className="text-4xl lg:text-6xl text-neutral-950 font-bold text-center">
            CHOOSE THE RIGHT PLAN FOR YOUR NEEDS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-40 gap-x-10 mt-10 mb-20">
            {plans.map((plan) => (
              <div key={plan.id}>
                <PlanCard plan={plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
