import { useState } from "react";
import type { ImperialForm, MetricForm } from "../types/types.tsx";

function BMICalculator() {
  // State to track selected unit system: "imperial" or "metric"
  const [unit, setUnit] = useState<string>("imperial");
  // State for storing the imperial form inputs: feet, inches, pounds
  const [imperialForm, setImperialForm] = useState<ImperialForm>({
    feet: "",
    inches: "",
    pounds: "",
  });
  // State for storing the metric form inputs: centimeters, kilograms
  const [metricForm, setMetricForm] = useState<MetricForm>({
    centimeters: "",
    kilograms: "",
  });
  // State for storing the calculated BMI value
  const [BMI, setBMI] = useState<number | null>(null);
  // Function to calculate BMI based on selected unit system
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
  // Toggle between imperial and metric units
  const handleUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <>
      <section id="bmi" className="container mx-auto max-w-screen-lg">
        <div className="flex flex-col place-items-center mt-34 2xl:mt-40 mx-4">
          {/* Section title */}
          <h2 className="text-3xl md:text-5xl text-lime-600 font-bold mb-8">
            CALCULATE YOUR BMI
          </h2>
          {/* Unit toggle button */}
          <button
            onClick={handleUnit}
            className="hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800 w-full mb-2"
          >
            {/* Conditional rendering based on selected unit */}
            {unit === "imperial"
              ? "CHANGE TO METRIC UNITS"
              : "CHANGE TO US UNITS"}
          </button>
          {unit === "imperial" ? (
            // Imperial input form
            <form
              className="flex flex-col justify-center gap-2 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                name="feet"
                placeholder="feet"
                min="0"
                value={imperialForm.feet}
                onChange={(e) =>
                  setImperialForm({ ...imperialForm, feet: e.target.value })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-300"
              />
              <input
                type="number"
                name="inches"
                placeholder="inches"
                min="0"
                value={imperialForm.inches}
                onChange={(e) =>
                  setImperialForm({
                    ...imperialForm,
                    inches: e.target.value,
                  })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-300"
              />
              <input
                type="number"
                name="pounds"
                placeholder="pounds"
                min="0"
                value={imperialForm.pounds}
                onChange={(e) =>
                  setImperialForm({
                    ...imperialForm,
                    pounds: e.target.value,
                  })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-300 w-full"
              />
              <button className="hover:bg-lime-600 hover:text-neutral-950 duration-300 active:scale-98 cursor-pointer shadow-black shadow-md py-2 px-4 mt-2 font-semibold bg-neutral-800">
                CALCULATE
              </button>
            </form>
          ) : (
            // Metric input form
            <form
              className="flex flex-col justify-center gap-2 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                name="centimeters"
                placeholder="centimeters"
                min="0"
                value={metricForm.centimeters}
                onChange={(e) =>
                  setMetricForm({ ...metricForm, centimeters: e.target.value })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-300"
              />
              <input
                type="number"
                name="kilograms"
                placeholder="kilograms"
                min="0"
                value={metricForm.kilograms}
                onChange={(e) =>
                  setMetricForm({
                    ...metricForm,
                    kilograms: e.target.value,
                  })
                }
                required
                className="flex gap-2 border-4 p-4 cursor-pointer border-neutral-300"
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
      </section>
    </>
  );
}

export default BMICalculator;
