import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trainers from "../data/trainers";

function Schedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [day, setDay] = useState(days[0]);

  const displayInfo = (day) => {
    switch (day) {
      case "Monday":
        return [
          {
            className: "Body Building",
            time: "10 AM - 12 AM",
            trainer: trainers[7],
          },
          { className: "Yoga", time: "2 PM - 3 PM", trainer: trainers[2] },
          {
            className: "Powerlifting",
            time: "6 PM - 8 PM",
            trainer: trainers[0],
          },
        ];
      case "Tuesday":
        return [
          {
            className: "Pilates",
            time: "8 AM - 9:30 AM",
            trainer: trainers[10],
          },
          {
            className: "Body Building",
            time: "4 PM - 6 PM",
            trainer: trainers[5],
          },
          {
            className: "Self-Defense",
            time: "8 PM - 9 PM",
            trainer: trainers[3],
          },
        ];
      case "Wednesday":
        return [
          {
            className: "Body Building",
            time: "9:30 AM - 10:30 AM",
            trainer: trainers[4],
          },
          {
            className: "Zumba",
            time: "1 PM - 2 PM",
            trainer: trainers[9],
          },
          {
            className: "Boxing",
            time: "4 PM - 5:30 PM",
            trainer: trainers[6],
          },
        ];
      case "Thursday":
        return [
          {
            className: "Kickboxing",
            time: "10:00 AM - 11:30 AM",
            trainer: trainers[8],
          },
          {
            className: "Body Building",
            time: "3 PM - 5 PM",
            trainer: trainers[1],
          },
          {
            className: "CrossFit",
            time: "6 PM - 5 PM",
            trainer: trainers[5],
          },
        ];
      case "Friday":
        return [
          {
            className: "Stretching & Mobility",
            time: "11 AM - 12:30 PM",
            trainer: trainers[9],
          },
          {
            className: "Yoga",
            time: "4 PM - 5 PM",
            trainer: trainers[2],
          },
          {
            className: "Body Building",
            time: "8 PM - 10 PM",
            trainer: trainers[1],
          },
        ];
      case "Saturday":
        return [
          {
            className: "Functional Training",
            time: "10 AM - 11 AM",
            trainer: trainers[3],
          },
          {
            className: "Body Building",
            time: "11 AM - 13 PM",
            trainer: trainers[6],
          },
          {
            className: "Self-Defense",
            time: "3 PM - 4 PM",
            trainer: trainers[4],
          },
        ];
    }
  };

  const classes = displayInfo(day);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 md:flex mt-30 gap-2 container mx-auto max-w-screen-xl justify-center px-4">
        {days.map((d) => (
          <button
            key={d}
            className={`text-neutral-950 duration-300 rounded-full px-4 py-2 cursor-pointer active:scale-98 ${
              day === d ? "bg-lime-600 font-semibold" : "bg-neutral-400"
            }`}
            onClick={() => setDay(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="flex flex-col text-xl mt-10 py-4 md:mb-50">
        {classes.length > 0 ? (
          classes.map((c, index) => (
            <div
              key={index}
              className="flex flex-col odd:bg-neutral-950 even:bg-neutral-900 w-full p-10"
            >
              <div className="grid grid-cols-3 gap-6 px-4">
                <p className="flex flex-col">
                  <strong>Class</strong> {c.className}
                </p>
                <p className="flex flex-col">
                  <strong>Time</strong> {c.time}
                </p>
                <p className="flex flex-col">
                  <strong>Trainer</strong> {c.trainer.name}
                </p>
              </div>
              <button className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 rounded-full px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-10">
                Schedule Now
              </button>
            </div>
          ))
        ) : (
          <p>No classes available.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Schedule;
