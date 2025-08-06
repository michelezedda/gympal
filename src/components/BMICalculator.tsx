import { useState } from "react";
import type { ImperialForm, MetricForm } from "../types/types.tsx";

function BMICalculator() {
  const [unit, setUnit] = useState<string>("imperial");
  const [imperialForm, setImperialForm] = useState<ImperialForm>({
    feet: "",
    inches: "",
    pounds: "",
  });
  const [metricForm, setMetricForm] = useState<MetricForm>({
    centimeters: "",
    kilograms: "",
  });
  const [BMI, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    if (unit === "imperial") {
      const feet = Number(imperialForm.feet);
      const inches = Number(imperialForm.inches);
      const pounds = Number(imperialForm.pounds);

      const totalInches = feet * 12 + inches;
      const bmi = (pounds * 703) / totalInches ** 2;
      setBMI(Number(bmi.toFixed(1)));
      setImperialForm({
        feet: "",
        inches: "",
        pounds: "",
      });
    } else {
      const cm = Number(metricForm.centimeters);
      const kg = Number(metricForm.kilograms);

      const bmi = kg / (cm / 100) ** 2;
      setBMI(Number(bmi.toFixed(1)));
      setMetricForm({
        centimeters: "",
        kilograms: "",
      });
    }
  };

  const handleUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col place-items-center mt-34 2xl:mt-40 mx-4">
          <h3 className="text-3xl md:text-5xl text-lime-600 font-bold mb-8">
            CALCULATE YOUR BMI
          </h3>
          <button
            onClick={handleUnit}
            className="hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800 w-full mb-2"
          >
            {unit === "imperial"
              ? "CHANGE TO METRIC UNITS"
              : "CHANGE TO US UNITS"}
          </button>
          {unit === "imperial" ? (
            <form
              className="flex flex-col justify-center gap-2 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                name="feet"
                placeholder="feet"
                value={imperialForm.feet}
                onChange={(e) =>
                  setImperialForm({ ...imperialForm, feet: e.target.value })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-500"
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
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-500"
              />
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
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-500 w-full"
              />
              <button className="hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800">
                CALCULATE
              </button>
            </form>
          ) : (
            <form
              className="flex flex-col justify-center gap-2 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                name="centimeters"
                placeholder="centimeters"
                value={metricForm.centimeters}
                onChange={(e) =>
                  setMetricForm({ ...metricForm, centimeters: e.target.value })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-500"
              />
              <input
                type="number"
                name="kilograms"
                placeholder="kilograms"
                value={metricForm.kilograms}
                onChange={(e) =>
                  setMetricForm({
                    ...metricForm,
                    kilograms: e.target.value,
                  })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-500"
              />
              <button className="hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800">
                CALCULATE
              </button>
            </form>
          )}
          {BMI ? (
            <div className="mt-4 flex flex-col items-center w-full">
              <h4 className="my-4 text-3xl lg:text-4xl font-semibold text-neutral-300">
                Your BMI: <span className="font-bold text-lime-600">{BMI}</span>
              </h4>
              <div className="flex flex-col gap-2 text-xl lg:text-2xl w-full">
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
                    BMI >= 25 && BMI <= 29.9
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
