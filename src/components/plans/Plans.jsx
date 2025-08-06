import PlanCard from "../plans/PlanCard";
import plans from "../../data/plans";

function Plans() {
  return (
    <>
      <div
        id="plans"
        className="relative not-[]:flex flex-col place-items-center mt-30 xl:mt-40 bg-neutral-700 pt-25 md:pt-55 pb-90 md:pb-75 lg:pb-120 -skew-y-10"
      >
        <div className="mx-auto max-w-screen-lg skew-y-10 flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-5xl text-neutral-950 font-bold text-center">
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
        <img
          src="/media/train-hard.png"
          alt="train hard pic"
          className="absolute bottom-5 right-5"
        />
      </div>
    </>
  );
}

export default Plans;
