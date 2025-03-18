import React from "react";

function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around bg-black p-4 text-neutral-400">
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-1 items-center">
            <img src="/media/logo.png" alt="GymPal logo" className="h-14" />
            <span className="text-lime-600 font-bold text-3xl">GymPal</span>
          </div>
          <div className="flex">
            <p>
              Take your health and body to the next level with our comprehensive
              designed to help you reach your fitness goal
            </p>
          </div>
          <div className="flex"></div>
          <div className="flex items-center">
            Privacy Policy <hr className="h-6 border-1 mx-2" />
            {new Date().getFullYear()} &#169; GymPal
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <ul>
            <h4 className="font-semibold text-lg">Our Classes</h4>
            <li className="hover:font-semibold cursor-pointer">
              Fitness Classes
            </li>
            <li className="hover:font-semibold cursor-pointer">
              Aerobics Classes
            </li>
            <li className="hover:font-semibold cursor-pointer">Power Yoga</li>
            <li className="hover:font-semibold cursor-pointer">
              Full-body strength
            </li>
          </ul>
          <ul>
            <h4 className="font-semibold text-lg">Working Hours</h4>
            <li>
              Mon-Fri &#x2015; <span className="font-semibold">7am-11pm</span>
            </li>
            <li>
              Saturday &#x2015; <span className="font-semibold">8am-7pm</span>
            </li>
            <li>
              Sunday &#x2015; <span className="font-semibold">Closed</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
