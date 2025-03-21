import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col lg:flex-row bg-black px-4 py-8 text-neutral-400">
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col items-start gap-2 basis-1/2">
            <div className="flex gap-1 items-center">
              <img src="/media/logo.png" alt="GymPal logo" className="h-14" />
              <span className="text-lime-600 font-bold text-3xl">GymPal</span>
            </div>
            <div className="flex">
              <p>
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
            </div>
            <div className="flex items-center basis-1/2">
              Privacy Policy <hr className="h-6 border-1 mx-2" />
              {new Date().getFullYear()} &#169; GymPal
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <div className="flex flex-col gap-2 basis-1/2">
              <p className="font-semibold text-lg">Our Locations</p>
              <span>1234 Palm Drive, Santa Monica, CA 90401, USA</span>
              <span>2815 West Melrose Avenue, Los Angeles, CA 90026, USA</span>
            </div>
            <div className="basis-1/2">
              <ul>
                <p className="font-semibold text-lg">Working Hours</p>
                <li>
                  Mon-Fri &#x2015;{" "}
                  <span className="font-semibold">7am-11pm</span>
                </li>
                <li>
                  Saturday &#x2015;{" "}
                  <span className="font-semibold">8am-7pm</span>
                </li>
                <li>
                  Sunday &#x2015; <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
