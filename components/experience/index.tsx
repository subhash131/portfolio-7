import Link from "next/link";
import React from "react";
import Reveal from "../animate/reveal";

const workHistory = [
  {
    title: "Founder",
    company: "Ad Tub",
    location: "India",
    duration: "Feb 2024 - Present",
    link: "https://ad-tub.vercel.app/",
  },
  {
    title: "Software Engineer - II",
    company: "PwC (US)",
    location: "Remote",
    duration: "May 2022 - Feb 2024",
    link: "https://www.pwc.com/us/en.html",
  },
  {
    title: "Software Engineer - I",
    company: "PwC (US)",
    location: "Remote",
    duration: "Jan 2021 - April 2022",
    link: "https://www.pwc.com/us/en.html",
  },
];

const Experience = () => {
  return (
    <div className="w-screen h-screen px-20 relative overflow-hidden mt-10 max-sm:h-fit max-sm:mt-0 max-sm:px-10">
      <div className="absolute w-96 h-96 pink_gradient_background pointer-events-none rounded-full blur-3xl -left-32 top-12" />
      <Reveal className="w-fit h-32 flex items-center max-sm:h-fit ">
        <p className="text-4xl max-sm:text-2xl">Work History</p>
      </Reveal>
      <div className="w-full h-full">
        {workHistory.map(
          ({ company, location, title, duration, link }, index) => {
            return (
              <Card
                company={company}
                location={location}
                title={title}
                duration={duration}
                key={`work-${index}`}
                link={link}
              />
            );
          }
        )}
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
  link,
}: {
  title: string;
  company: string;
  duration: string;
  location: string;
  link: string;
}) => {
  return (
    <div className="border-b-thin flex justify-between items-center border-b-cus-light max-sm:flex-col max-sm:items-start max-sm:pb-4">
      <div className="py-10 flex flex-col gap-4">
        <Reveal>
          <p className="text-3xl max-sm:text-xl">{title}</p>
        </Reveal>
        <Link href={link} target="_blank" className="text-sm cursor-pointer">
          {company}
        </Link>
      </div>
      <div className="text-neutral-600 flex flex-col items-end gap-4 max-sm:items-start max-sm:gap-2">
        <p>{duration}</p>
        <p className="text-xs">{location}</p>
      </div>
    </div>
  );
};
