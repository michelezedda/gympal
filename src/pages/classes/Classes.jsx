import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import classes from "../../data/classes";
import CCard from "../classes/CCard";

function Classes() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center mt-30 mb-20">
        <h2 className="text-lime-600 text-4xl lg:text-6xl font-bold mb-8">
          CLASSES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 mx-6">
          {classes.map((c) => (
            <div key={c.id}>
              <CCard c={c} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Classes;
