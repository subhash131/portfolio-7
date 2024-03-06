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
    <div className={`w-screen h-screen $} p-20 flex flex-col relative`}>
      <div className="absolute w-96 h-96 sky_gradient_background z-1 rounded-full blur-3xl" />
      <div className="">
        <div className="w-full h-20 flex items-center justify-between">
          <Reveal>
            <p className="text-7xl opacity-90">My Approach</p>
          </Reveal>
          <Link
            href="https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/"
            target="_blank"
          >
            <div className="px-4 py-2 border rounded-full hover:scale-90 transition-all">
              <p>standard procedure</p>
            </div>
          </Link>
        </div>
        <div className="w-full h-fit pt-32 flex items-center justify-between">
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
      </div>
      <div className="w-[90%] m-auto mt-12 flex justify-between relative items-center">
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-5 h-5 rounded-full bg-white" />
        <div className="w-5 h-5 rounded-full bg-white" />
        <div
          className={`absolute w-full border-b-2 dashed_border border-white`}
        />
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
      <div className="w-52 h-full flex flex-col gap-4">
        <h3 className="text-2xl h-20 ">{title}</h3>
        <p className={`${poppins.className} text-xs h-24 text-neutral-400`}>
          {description}
        </p>
      </div>
    </Reveal>
  );
};
