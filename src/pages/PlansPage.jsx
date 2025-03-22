import Navbar from "../components/Navbar";
import Plans from "../components/plans/Plans";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function PlansPage() {
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
