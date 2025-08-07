import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import OpenStreetMap from "../components/OpenStreetMap";

function About() {
  const { scrollToTop } = useAppContext();

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg flex flex-col gap-6 items-center justify-center mt-40 mb-20">
        <div className="flex flex-col items-center flex-between mx-4">
          <h1 className="text-3xl md:text-5xl font-bold text-lime-600 text-center mb-6">
            A FEW WORDS ABOUT THE CLUB
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <p className="text-xl lg:text-3xl">
              Your fitness journey should be simple, motivating, and rewarding.
              GymPal is designed to be your ultimate workout companion, helping
              you build strength, improve endurance, and track your progress
              effortlessly. Whether you're just starting out or pushing for new
              personal records, we provide the tools you need to stay consistent
              and reach your goals.
            </p>
            <img src="/media/winner.webp" className="flex-1 w-100" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="mx-4 text-xl lg:text-2xl">
            <h2 className="text-lime-600">About Us</h2>
            <p>
              GymPal is designed to make fitness tracking simple, effective, and
              engaging. Whether you're a beginner or an experienced athlete, our
              app helps you stay on top of your workouts, track progress, and
              stay motivated with smart features tailored to your fitness goals.
            </p>
          </div>
          <div className="mx-4 text-xl lg:text-2xl">
            <h2 className="text-lime-600">Our History</h2>
            <p>
              GymPal was born from a passion for fitness and technology.
              Frustrated by complicated tracking apps and inconsistent progress
              monitoring, we set out to create a user-friendly solution that
              empowers everyone to take control of their fitness journey. What
              started as a small project has evolved into a powerful tool,
              helping users worldwide stay committed and achieve their goals.
            </p>
          </div>
        </div>
      </div>
      <OpenStreetMap />
      <Footer />
    </>
  );
}

export default About;
