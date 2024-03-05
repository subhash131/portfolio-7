import React from "react";

const workHistory = [
  {
    title: "Senior Frontend Engineer (Freelance)",
    company: "Sponsor Sphere",
    location: "Remote",
    duration: "Jan 2024 - Present",
  },
  {
    title: "Software Engineer - II",
    company: "PwC (US)",
    location: "Remote",
    duration: "May 2022 - Feb 2024",
  },
  {
    title: "Software Engineer - I",
    company: "PwC (US)",
    location: "Remote",
    duration: "Jan 2021 - April 2022",
  },
];

const Experience = () => {
  return (
    <div className="w-screen h-screen px-20 relative overflow-hidden">
      <div className="absolute w-96 h-96 pink_gradient_background z-1 rounded-full blur-3xl -left-32 top-12" />
      <div className="h-32 flex items-center">
        <p className="text-4xl">Work History</p>
      </div>
      <div className="w-full h-full">
        {workHistory.map(({ company, location, title, duration }, index) => {
          return (
            <Card
              company={company}
              location={location}
              title={title}
              duration={duration}
              key={`work-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

const Card = ({
  title,
  company,
  duration,
  location,
}: {
  title: string;
  company: string;
  duration: string;
  location: string;
}) => {
  return (
    <div className="border-b-thin flex justify-between items-center border-b-cus-light">
      <div className="py-10 flex flex-col gap-4">
        <p className="text-3xl">{title}</p>
        <p className="text-sm">{company}</p>
      </div>
      <div className="text-neutral-600 flex flex-col items-end gap-4">
        <p>{duration}</p>
        <p className="text-xs">{location}</p>
      </div>
    </div>
  );
};
