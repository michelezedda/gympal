import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error(
      `You’re strong ${formData.firstName} ${formData.lastName}, but not strong enough to break through this demo!`
    );
  };

  // Redirect if no plan is selected
  useEffect(() => {
    if (!selectedPlan) navigate("/plans");
  }, [selectedPlan, navigate]);

  // Scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl mt-26 mb-20 px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl">You're almost there Pal! 🎉</h2>
          <p className="text-lg">
            You’ve selected the{" "}
            <strong className="text-lime-600">
              {selectedPlan.title.toUpperCase()}
            </strong>{" "}
            plan — great choice! Get ready to take your fitness journey to the
            next level with GymPal.
          </p>
        </div>
        <div className="mt-8 flex flex-col">
          <form
            className="flex flex-col bg-neutral-800 rounded-lg p-4 text-xl gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="firstName">First name: </label>
            <input
              id="firstName"
              type="text"
              className="border-2 border-white rounded-lg px-2 py-1 focus:outline-lime-600"
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
              className="border-2 border-white rounded-lg px-2 py-1 focus:outline-lime-600"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
              required
            />
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className="border-2 border-white rounded-lg px-2 py-1 focus:outline-lime-600"
              placeholder="Your address"
              value={formData.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
              required
            />
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              className="border-2 border-white rounded-lg px-2 py-1 focus:outline-lime-600"
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
              <button className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 rounded-lg px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-8 mx-10 text-md xl:text-xl border-2 border-white hover:border-lime-400">
                CHECKOUT
              </button>
            </div>
            <Toaster />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
