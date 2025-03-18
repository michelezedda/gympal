import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import PlansPage from "./pages/PlansPage";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/plans-page" element={<PlansPage />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
