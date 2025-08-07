import { useState } from "react";
import faq from "../data/faq";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import type { FaqItem } from "../types/types.tsx";

function FAQ() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelection = (currentId: number) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="flex flex-col place-items-center mt-30 xl:mt-40 sm:mb-30 lg:mb-60">
      <div className="mx-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl text-lime-700 font-bold text-center">
          FAQ
        </h2>
        <div className="flex flex-col gap-4 mt-10 w-full">
          {faq.map((faqItem: FaqItem) => (
            <div
              className={`flex flex-col gap-2 border-4 p-4 cursor-pointer md:w-180 lg:w-250 ${
                selected === faqItem.id
                  ? "border-lime-600"
                  : "border-neutral-300"
              }`}
              key={faqItem.id}
              onClick={() => handleSelection(faqItem.id)}
            >
              <h4
                className={`flex gap-2 text-xl lg:text-3xl font-semibold ${
                  selected === faqItem.id ? "text-lime-600" : "text-neutral-300"
                }`}
              >
                {faqItem.question}{" "}
                {selected === faqItem.id ? (
                  <IoIosArrowUp size={30} />
                ) : (
                  <IoIosArrowDown size={30} />
                )}
              </h4>

              {/* ANIMATED ANSWER CONTAINER */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  selected === faqItem.id
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-lg lg:text-2xl">{faqItem.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
