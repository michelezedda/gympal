import { useState } from "react";
import faq from "../data/faq";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function FAQ() {
  const [selected, setSelected] = useState([]);

  const handleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <>
      <div className="flex flex-col place-items-center mt-30 xl:mt-40 sm:mb-30 lg:mb-60 bg-neutral-700 pt-25 md:pt-55 pb-45 md:pb-75 skew-y-10">
        <div className="mx-auto max-w-screen-lg -skew-y-10 flex flex-col items-center justify-center">
          <h3 className="text-5xl lg:text-6xl text-neutral-950 font-bold text-center">
            FAQ
          </h3>
          <div className="flex flex-col gap-10 mt-14 mx-4">
            {faq.map((faqItem) => (
              <div
                className={`flex flex-col gap-2 border-4 p-4 cursor-pointer md:w-180 lg:w-250 ${
                  selected === faqItem.id
                    ? "border-lime-600"
                    : "border-neutral-950"
                }`}
                key={faqItem.id}
                onClick={() => handleSelection(faqItem.id)}
              >
                <h4
                  className={`flex gap-2 text-xl lg:text-3xl font-semibold ${
                    selected === faqItem.id
                      ? "text-lime-600"
                      : "text-neutral-950"
                  }`}
                >
                  {faqItem.question} <IoIosArrowDown size={30} />
                </h4>
                {selected === faqItem.id && (
                  <p className="text-lg lg:text-2xl">{faqItem.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
