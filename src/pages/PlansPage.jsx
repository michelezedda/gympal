import Navbar from "../components/Navbar";
import Plans from "../components/plans/Plans";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";

function PlansPage() {
  const { scrollToTop } = useAppContext();

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg mb-50">
        <Plans />
      </div>
      <Banner />
      <Footer />
    </>
  );
}

export default PlansPage;
