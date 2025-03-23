import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { square } from "ldrs";

function App() {
  const Home = lazy(() => import("./Home"));
  const About = lazy(() => import("./pages/About"));
  const Classes = lazy(() => import("./pages/classes/Classes"));
  const PlansPage = lazy(() => import("./pages/PlansPage"));
  const Schedule = lazy(() => import("./pages/Schedule"));
  const Checkout = lazy(() => import("./pages/Checkout"));

  square.register();

  return (
    <>
      <AppProvider>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <l-square
                size="35"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="1.2"
                color="black"
              ></l-square>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/checkout" element={<Checkout />} />{" "}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </AppProvider>
    </>
  );
}

export default App;
