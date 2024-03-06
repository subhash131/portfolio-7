import { poppins } from "@/fonts";
import Link from "next/link";
import React from "react";
import Reveal from "../animate/reveal";

const data = [
  {
    title: "Gather Information",
    description:
      "Conduct meetings with stakeholders to capture and understand their requirements.",
  },
  {
    title: "Design and Prototyping",
    description:
      "Assess potential solutions for the problem and work closely with stakeholders to enhance the design.",
  },
  {
    title: "Implementation",
    description:
      "Translate the approved designs into functional frontend, adhering to best practices, and incorporating interactivity and animations.",
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "Conduct functional testing to ensure features work as intended and address any bugs or performance issues.",
  },
  {
    title: "Deployment and Launch",
    description:
      "Initiate production deployment, optimize resources, configure hosting, monitor for a seamless launch.",
  },
];

const Approach = () => {
  return (
    <div
      className={`w-screen h-screen p-20 flex flex-col relative max-xl:px-10 max-sm:h-fit`}
    >
      <div className="absolute w-96 h-96 sky_gradient_background z-1 rounded-full blur-3xl" />
      <div>
        <div className="w-full h-20 flex items-center justify-between max-sm:flex-col max-sm:h-fit">
          <Reveal>
            <p className="text-7xl opacity-90 max-lg:text-4xl max-sm:text-2xl">
              My Approach
            </p>
          </Reveal>
          <Link
            href="https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/"
            target="_blank"
          >
            <div className="px-4 py-2 border rounded-full hover:scale-90 transition-all max-sm:hidden text-center">
              <p>standard procedure</p>
            </div>
          </Link>
        </div>
        <div className="max-sm:flex h-fit">
          <div className="w-full h-fit pt-32 max-sm:pt-10 flex items-center justify-between max-sm:flex-col max-sm:gap-4 ">
            {data.map(({ description, title }, index) => {
              return (
                <Card
                  description={description}
                  title={title}
                  key={`approach-${index}`}
                  index={index}
                />
              );
            })}
          </div>
          <div className="w-[90%] mt-12 flex justify-between relative items-center max-sm:flex-col max-sm:h-auto max-sm:pb-24 max-sm:w-auto">
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-5 h-5 rounded-full bg-white" />
            <div
              className={`absolute w-full border-b-2 dashed_border border-white max-sm:hidden`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;

const Card = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <Reveal delay={index === 0 ? 0.05 : index / 3}>
      <div className="w-52 h-full flex flex-col gap-4 max-lg:w-44 max-md:w-32 max-lg:gap-2 max-sm:w-[80%]">
        <h3 className="text-2xl h-20 max-lg:text-xl max-md:text-sm max-sm:h-fit">
          {title}
        </h3>
        <p
          className={`${poppins.className} text-xs h-24 text-neutral-400 max-xl:w-[90%]`}
        >
          {description}
        </p>
      </div>
    </Reveal>
  );
};
