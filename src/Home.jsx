import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trainers from "./components/trainers/Trainers";
import Plans from "./components/plans/Plans";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
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
      <Trainers />
      <Plans />
      <Gallery />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
