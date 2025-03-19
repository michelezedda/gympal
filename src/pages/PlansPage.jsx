import Navbar from "../components/Navbar";
import Plans from "../components/plans/Plans";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function PlansPage() {
  return (
    <>
      <Navbar />
      <div className="mt-34 mx-auto max-w-screen-xl">
        <Plans />
      </div>
      <Banner />
      <Footer />
    </>
  );
}

export default PlansPage;
