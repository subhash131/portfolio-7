import { antonio, poppins } from "@/fonts";
import React from "react";

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
      className={`w-screen h-screen ${antonio.className} p-20 flex flex-col relative`}
    >
      <div className="absolute w-96 h-96 sky_gradient_background z-1 rounded-full blur-3xl" />
      <div className="">
        <div className="w-full h-fit flex items-center justify-start">
          <p className="text-7xl opacity-90">
            My Approach to solve
            <br /> the problem
          </p>
        </div>
        <div className="w-full h-fit pt-32 flex items-center justify-between">
          {data.map(({ description, title }, index) => {
            return (
              <Card
                description={description}
                title={title}
                key={`approach-${index}`}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[90%] m-auto mt-4 flex justify-between relative items-center">
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
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-52 h-full flex flex-col gap-4">
      <h3 className="text-3xl h-20">{title}</h3>
      <p className={`${poppins.className} text-xs h-24 text-neutral-400`}>
        {description}
      </p>
    </div>
  );
};
