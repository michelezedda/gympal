import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trainers from "./components/trainers/Trainers";
import Plans from "./components/plans/Plans";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import { useEffect } from "react";
import BMICalculator from "./components/BMICalculator";
import ContactForm from "./components/ContactForm";

function Home() {
  const { scrollToTop, isContactFormOpen } = useAppContext();

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main>
      {isContactFormOpen && <ContactForm />}
      <Navbar />
      <Hero />
      <Trainers />
      <Gallery />
      <BMICalculator />
      <Plans />
      <FAQ />
      <Footer />
    </main>
  );
}

export default Home;
