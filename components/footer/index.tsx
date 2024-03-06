"use client";
import React from "react";
import SpinningText from "../hero/spinning-text";
import Reveal from "../animate/reveal";

const Footer = () => {
  return (
    <div className="w-screen h-screen px-20 py-10 grid grid-cols-12 grid-rows-12 overflow-hidden bg-red-20 max-sm:flex max-sm:flex-col max-sm:gap-6 max-sm:h-fit">
      <div className="row-start-1 row-end-11 col-start-1 col-end-6 flex justify-center items-center flex-col gap-4">
        <a
          href="mailto:subhashnayak131@gmail.com"
          className="text-neutral-500 hover:text-[#CA9754] transition-all"
        >
          <Reveal className="w-fit">
            <p className="text-6xl p-1">
              <span className="text-neutral-400">Let&apos;s</span> <br />
              Connect
            </p>
          </Reveal>
          <p className="py-1 px-3">subhashnayak131@gmail.com</p>
        </a>
      </div>
      <div
        className="row-start-4 col-start-7 row-span-3 col-span-2 cursor-pointer hover:scale-105 transition-all"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Reveal className="w-fit">
          <p className="text-xl">Home</p>
        </Reveal>
        <p className="text-xs text-neutral-500">Navigate to top.</p>
      </div>
      <div
        className="row-start-7 col-start-7 row-span-3 col-span-2 cursor-pointer hover:scale-105 transition-all"
        onClick={() => {
          scrollTo({ top: innerHeight, behavior: "smooth" });
        }}
      >
        <Reveal className="w-fit">
          <p className="text-xl">Process</p>
        </Reveal>
        <p className="text-xs text-neutral-500">
          Take a look at my approach to work.
        </p>
      </div>
      <div
        className="row-start-7 col-start-10 row-span-3 col-span-2 cursor-pointer hover:scale-105 transition-all"
        onClick={() => {
          scrollTo({ top: innerHeight * 2, behavior: "smooth" });
        }}
      >
        <Reveal className="w-fit">
          <p className="text-xl">Experience</p>
        </Reveal>
        <p className="text-xs text-neutral-500">Check out my work history.</p>
      </div>
      <div className="row-start-10 row-span-2 col-start-2 col-span-2 grid place-content-center">
        <SpinningText />
      </div>
      <div className="row-start-10 row-span-4 col-span-6 col-start-6"></div>
    </div>
  );
};

export default Footer;
