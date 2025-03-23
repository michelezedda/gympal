import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import trainers from "../data/trainers";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import toast, { Toaster } from "react-hot-toast";

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
  const { scrollToTop } = useAppContext();

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  // Toaster
  const handleClick = () => {
    toast.error(
      "Demo mode: Activated. Scheduling classes: Deactivated. Your gains: Pending."
    );
  };

  // Function to display class info based on the selected day
  const displayInfo = (day) => {
    switch (day) {
      case "Monday":
        return [
          {
            className: "Body Building",
            time: "10 AM - 12 AM",
            trainer: trainers[4],
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
            trainer: trainers[1],
          },
          {
            className: "Body Building",
            time: "4 PM - 6 PM",
            trainer: trainers[3],
          },
          {
            className: "Self-Defense",
            time: "8 PM - 9 PM",
            trainer: trainers[5],
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
            trainer: trainers[1],
          },
          {
            className: "Boxing",
            time: "4 PM - 5:30 PM",
            trainer: trainers[0],
          },
        ];
      case "Thursday":
        return [
          {
            className: "Kickboxing",
            time: "10:00 AM - 11:30 AM",
            trainer: trainers[3],
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
            trainer: trainers[5],
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
            trainer: trainers[4],
          },
          {
            className: "Self-Defense",
            time: "3 PM - 4 PM",
            trainer: trainers[0],
          },
        ];
    }
  };

  const classes = displayInfo(day);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg grid grid-cols-3 md:flex mt-34 gap-2 justify-center px-4">
        {days.map((d) => (
          <button
            key={d}
            className={`text-neutral-950 duration-300 shadow-md shadow-neutral-950 px-4 py-2 cursor-pointer active:scale-98 md:text-xl lg:text-2xl font-semibold ${
              day === d ? "bg-lime-600" : "bg-neutral-400"
            }`}
            onClick={() => setDay(d)}
          >
            {d}
          </button>
        ))}
      </div>
      <div className="flex flex-col text-xl mt-6 py-4 mx-auto max-w-screen-lg ">
        {classes.length > 0 ? (
          classes.map((c, index) => (
            <div
              key={index}
              className="flex p-10 items-center border-b-1 border-neutral-600"
            >
              <div className="w-full flex flex-col lg:flex-row justify-between">
                <div className="flex justify-between items-center gap-2 basis-3/4">
                  <p className="flex flex-col lg:basis-2/6">
                    <strong>Class</strong> {c.className}
                  </p>
                  <p className="flex flex-col lg:basis-2/6">
                    <strong>Time</strong> {c.time}
                  </p>
                  <p className="flex flex-col lg:basis-2/6">
                    <strong>Trainer</strong> {c.trainer.name}
                  </p>
                </div>
                <button
                  className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 shadow-md shadow-neutral-950 px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-10 lg:mt-0 basis-1/4"
                  onClick={handleClick}
                >
                  SCHEDULE NOW
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No classes available.</p>
        )}
      </div>
      <Banner />
      <Footer />
      <Toaster />
    </>
  );
}

export default Schedule;
