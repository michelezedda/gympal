import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import classes from "../../data/classes";
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { lazy, Suspense } from "react";
import SkeletonCard from "./SkeletonCard";

function Classes() {
  const { scrollToTop } = useAppContext();

  const CCard = lazy(() => import("./CCard"));

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-lg flex flex-col justify-center items-center mt-30 mb-20">
        <h2 className="text-lime-600 text-4xl lg:text-6xl font-bold mb-10 text-center mx-6">
          WORKOUTS DESIGNED FOR YOU
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 mx-6 w-full">
          {classes.map((c) => (
            <div key={c.id}>
              <Suspense fallback={<SkeletonCard />}>
                <CCard c={c} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Classes;
