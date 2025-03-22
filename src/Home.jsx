import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trainers from "./components/trainers/Trainers";
import Plans from "./components/plans/Plans";
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";

function Home() {
  const { scrollToTop } = useAppContext();

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto max-w-screen-lg">
        <Trainers />
        <Plans />
        <Gallery />
      </div>
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
