import React from "react";
import HandPhoneImg from "../assets/handphone.png";
import IdeaIcon from "../assets/idea-icon.png";
import ExecutionIcon from "../assets/execution-icon.png";
import RocketIcon from "../assets/rocket-icon.png";

const steps = [
  {
    icon: IdeaIcon,
    title: "Idea Initiation",
    description:
      "For a start, we’ll uncover what makes you stand apart and creatively position your brand and business.",
  },
  {
    icon: ExecutionIcon,
    title: "Execution",
    description:
      "To deliver exceptionally, we dig deep into a brand’s essence and values, clearly understand them, then inject them into the design.",
  },
  {
    icon: RocketIcon,
    title: "Launch",
    description:
      "We provide full-service solutions to help you launch, market, and grow your business.",
  },
];

const ThreeStepComponent = () => {
  return (
    <section className="flex flex-col gap-32 px-6 md:px-14 lg:px-52 items-center py-24 bg-gray-100">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-32">

        <div className="flex justify-center items-center">
          <img
            src={HandPhoneImg}
            alt="handphone"
            width={700}
            height={858}
          />
        </div>

        <div className="h-full flex flex-col items-end gap-12">
          <h3 className="pr-0 xl:pr-64 text-[44px] text-[#101010] font-bold">
            A simple, yet effective three step process.
          </h3>

          <div className="flex gap-10 flex-col">
            {steps.map((step, index) => (
               <div
                     key={index}
                     className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-start rounded-lg"
                  >
                  <div className="flex items-start justify-center w-[100px] h-[100px] bg-gray-100 rounded-full">
                     <img
                        src={step.icon}
                        alt={step.title}
                        className="w-[100px] h-[100px] object-contain"
                     />
                  </div>

                  <div className="flex-1 pr-0 xl:pr-28">
                     <h4 className="text-[#101010] font-bold text-2xl text-center md:text-left">{step.title}</h4>
                     <p className="font-normal text-xl text-gray-600 mt-4">
                        {step.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>

        </div>
      </div>

      <div className="text-center">
        <p className="font-normal text-2xl">
          Wherever you are in your journey, we’d love to hear from you.{" "}
          <span className="border-b-2 border-black font-bold">Book a free call</span>
        </p>
      </div>
    </section>
  );
};

export default ThreeStepComponent;
