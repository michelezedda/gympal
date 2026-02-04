import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { IoMdClose } from "react-icons/io";
import plans from "../data/plans";
import classes from "../data/classes";
import type { FormData, Plan, Class, Location } from "../types/types";
import locations from "../data/locations";
import ReactDom from "react-dom";

function Modal() {
  const [completed, setCompleted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    location: "",
    plan: "",
    class: "",
    message: "",
  });

  const { setIsContactFormOpen } = useAppContext();

  // Toaster
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  return ReactDom.createPortal(
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80">
        <div
          className="relative flex flex-col bg-black pt-20 pb-10 border border-lime-600 shadow-lg shadow-black
          overflow-y-auto max-h-[95dvh] max-w-screen-md w-full mx-4"
        >
          <IoMdClose
            className="absolute top-5 right-5 cursor-pointer"
            size={30}
            onClick={() => setIsContactFormOpen(false)}
          />
          <div className="mx-auto max-w-screen-lg px-4">
            <div className="flex flex-col items-center justify-center gap-4 xl:gap-6">
              <p className="text-2xl xl:text-3xl">
                Great choice, Pal! 💪🏽 Get ready to take your fitness journey to
                the next level with GymPal. Just one last step — fill out the
                form, and we'll be in touch to help you get started.
              </p>
            </div>
            <div className="mt-8 flex flex-col">
              <form
                className="flex flex-col bg-neutral-900 shadow-lg shadow-neutral-950 p-4 text-xl gap-4"
                onSubmit={handleSubmit}
              >
                <label htmlFor="fullName">Full name: </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  minLength={3}
                  required
                />
                <label htmlFor="email">Email: </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <label htmlFor="location">Location:</label>
                <select
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                  required
                >
                  <option value="" disabled>
                    -- Select a location --
                  </option>
                  {locations.map((location: Location) => (
                    <option
                      key={location.id}
                      value={location.street}
                      className="text-black"
                    >
                      {location.street}
                    </option>
                  ))}
                </select>
                <label htmlFor="plan">Plan: </label>
                <select
                  name="plan"
                  id="plan"
                  value={formData.plan}
                  onChange={(e) =>
                    setFormData({ ...formData, plan: e.target.value })
                  }
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                >
                  <option value="" className="text-neutral-500">
                    -- Select a plan (optional) --
                  </option>
                  {plans.map((plan: Plan) => (
                    <option
                      key={plan.id}
                      value={plan.title}
                      className="text-black"
                    >
                      {plan.title}
                    </option>
                  ))}
                </select>
                <label htmlFor="class">Class: </label>
                <select
                  name="class"
                  id="class"
                  value={formData.class}
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                >
                  <option value="" className="text-neutral-500">
                    -- Select a class (optional) --
                  </option>
                  {classes.map((c: Class) => (
                    <option key={c.id} value={c.name} className="text-black">
                      {c.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="message">Message: </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message (optional)"
                  className="border-2 border-white px-2 py-1 focus:outline-lime-600 w-full"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                {completed ? (
                  <div className="bg-lime-600 text-neutral-950 px-4 py-2 font-semibold mt-8 text-md xl:text-xl mb-4">
                    Successfully submitted!
                  </div>
                ) : (
                  <button className="text-neutral-950 bg-neutral-400 hover:bg-lime-600 duration-300 px-4 py-2 cursor-pointer active:scale-98 font-semibold mt-8 text-md xl:text-xl mb-4">
                    SUBMIT
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal"),
  );
}

export default Modal;
