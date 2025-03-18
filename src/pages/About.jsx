import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-6 items-center justify-center mt-40 mb-20">
        <h2 className="text-4xl font-bold text-lime-600">ABOUT US</h2>
        <div>
          <p>
            GymPal is designed to make fitness tracking simple, effective, and
            engaging. Whether you're a beginner or an experienced athlete, our
            app helps you stay on top of your workouts, track progress, and stay
            motivated with smart features tailored to your fitness goals.
          </p>
        </div>
        <div>
          <h3 className="text-lime-600">Our History</h3>
          <p>
            GymPal was born from a passion for fitness and technology.
            Frustrated by complicated tracking apps and inconsistent progress
            monitoring, we set out to create a user-friendly solution that
            empowers everyone to take control of their fitness journey. What
            started as a small project has evolved into a powerful tool, helping
            users worldwide stay committed and achieve their goals.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
