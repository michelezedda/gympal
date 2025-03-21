import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Classes from "./pages/classes/Classes";
import PlansPage from "./pages/PlansPage";
import Schedule from "./pages/Schedule";
import Checkout from "./pages/Checkout";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
