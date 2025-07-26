import { useState } from "react";

function BMICalculator() {
  const [imperialForm, setImperialForm] = useState({
    feet: "",
    inches: "",
    pounds: "",
  });
  const [BMI, setBMI] = useState(null);

  const calculateBMI = () => {
    const feet = Number(imperialForm.feet);
    const inches = Number(imperialForm.inches);
    const pounds = Number(imperialForm.pounds);

    const totalInches = feet * 12 + inches;
    const bmi = (pounds * 703) / totalInches ** 2;
    setBMI(bmi.toFixed(1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col place-items-center mt-34 2xl:mt-40">
          <h3 className="text-4xl lg:text-6xl text-lime-600 font-bold mb-8">
            CALCULATE YOUR BMI
          </h3>
          <form
            className="flex flex-col justify-center gap-2 mx-4"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2">
              <input
                type="number"
                name="feet"
                placeholder="feet"
                value={imperialForm.feet}
                onChange={(e) =>
                  setImperialForm({ ...imperialForm, feet: e.target.value })
                }
                required
                className="flex flex-col gap-2 border-4 p-4 cursor-pointer border-neutral-500 w-full"
              />
              <input
                type="number"
                name="inches"
                placeholder="inches"
                value={imperialForm.inches}
                onChange={(e) =>
                  setImperialForm({
                    ...imperialForm,
                    inches: e.target.value,
                  })
                }
                required
                className="flex flex-col gap-2 border-4 p-4 cursor-pointer border-neutral-500"
              />
            </div>
            <input
              type="number"
              name="pounds"
              placeholder="pounds"
              value={imperialForm.pounds}
              onChange={(e) =>
                setImperialForm({
                  ...imperialForm,
                  pounds: e.target.value,
                })
              }
              required
              className="flex flex-col gap-2 border-4 p-4 cursor-pointer border-neutral-500 w-full"
            />
            <button
              className={`hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800`}
            >
              CALCULATE
            </button>
          </form>
          {BMI ? (
            <div className="mt-4 flex flex-col items-center">
              <h4 className="my-4 text-3xl lg:text-4xl font-semibold text-neutral-300">
                Your BMI: <span className="font-bold text-lime-600">{BMI}</span>
              </h4>
              <div className="flex flex-col w-100 gap-2 text-xl lg:text-2xl">
                <p
                  className={`py-2 px-8 flex justify-between ${
                    BMI < 18.5
                      ? "bg-lime-600 animate-pulse font-semibold"
                      : "bg-neutral-800"
                  }`}
                >
                  Underweight <span>{"< 18.5"}</span>
                </p>
                <p
                  className={`py-2 px-8 flex justify-between ${
                    BMI >= 18.5 && BMI <= 24.9
                      ? "bg-lime-600 animate-pulse font-semibold"
                      : "bg-neutral-800"
                  }`}
                >
                  Healthy Weight <span>18.5 - 24.9</span>
                </p>
                <p
                  className={`py-2 px-8 flex justify-between ${
                    BMI <= 25 && BMI >= 29.9
                      ? "bg-lime-600 animate-pulse font-semibold"
                      : "bg-neutral-800"
                  }`}
                >
                  Overweight <span>25 - 29.9</span>
                </p>
                <p
                  className={`py-2 px-8 flex justify-between ${
                    BMI >= 30
                      ? "bg-lime-600 animate-pulse font-semibold"
                      : "bg-neutral-800"
                  }`}
                >
                  Obesity <span>{"> 30"}</span>
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default BMICalculator;
