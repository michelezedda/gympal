import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
  });

  const { selectedPlan, scrollToTop } = useAppContext();

  // Toaster
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(
      `Great job, ${formData.firstName}! If this weren’t a demo, we’d totally be in touch.`
    );
  };

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-center bg-cover bg-no-repeat bg-[url(/media/checkout.png)] pt-40 pb-15">
        <div className="mx-auto max-w-screen-lg px-4 min-h-screen">
          <div className="flex flex-col items-center justify-center gap-4 xl:gap-6">
            <h2 className="text-4xl xl:text-5xl text-center">
              Great choice, Pal! 💪🏽
            </h2>
            <p className="text-2xl xl:text-3xl">
              Your{" "}
              <strong className="text-lime-600">
                {selectedPlan.title.toUpperCase()}
              </strong>{" "}
              plan is locked in! Get ready to take your fitness journey to the
              next level with GymPal. Just one last step — fill out the form,
              and we’ll be in touch to help you get started.
            </p>
          </div>
          <div className="mt-8 flex flex-col">
            <form
              className="flex flex-col bg-neutral-900 shadow-lg shadow-neutral-950 p-4 text-xl gap-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="firstName">First name: </label>
              <input
                id="firstName"
                type="text"
                className="border-2 border-white px-2 py-1 focus:outline-lime-600"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                }}
                required
              />
              <label htmlFor="lastName">Last name:</label>
              <input
                id="lastName"
                type="text"
                className="border-2 border-white px-2 py-1 focus:outline-lime-600"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                }}
                required
              />
              <label htmlFor="location">Location:</label>
              <select
                name="location"
                id="location"
                className="border-2 border-white px-2 py-1 focus:outline-lime-600"
                required
              >
                <option value="" selected disabled>
                  -- Select a location --
                </option>
                <option value="Santa Monica" className="text-black">
                  Santa Monica
                </option>
                <option value="Santa Monica" className="text-black">
                  Los Angeles
                </option>
              </select>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                type="email"
                className="border-2 border-white px-2 py-1 focus:outline-lime-600"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                required
              />
              <div className="flex flex-col gap-2 mt-4">
                <span>
                  Your plan:
                  <strong className="text-lime-600 ml-2">
                    {" "}
                    {selectedPlan.title.toUpperCase()}
                  </strong>
                </span>
                <span>
                  Monthly price:
                  <strong className="text-lime-600 ml-2">
                    $ {selectedPlan.price}
                  </strong>
                </span>
              </div>
              <button className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-8 text-md xl:text-xl mb-4">
                SUBMIT
              </button>
              <Toaster />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
