"use client";
import { poppins } from "@/fonts";
import React from "react";
import MeshSvg from "../svg/mesh-svg";
import Image from "next/image";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <main
      className={`relative flex flex-col h-screen w-full z-10 items-center justify-center ${poppins.className}`}
    >
      <Navbar />
      <div className="absolute w-96 h-96 blue_gradient_background z-1 rounded-full blur-2xl -left-16 bottom-0" />
      <div className="absolute w-96 h-96 sky_gradient_background z-1 rounded-full blur-2xl" />
      <div className="absolute w-96 h-96 pink_gradient_background z-1 rounded-full blur-2xl -right-16 -top-10" />
      <div className="absolute w-[70rem] h-96  overflow-hidden">
        <Image
          src="/mask.svg"
          alt="mask"
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-20 items-center justify-center h-[60%] z-10">
        <div className="w-full flex justify-center text-center ">
          <h1 className="text-8xl w-[80%] font-semibold leading-[8rem] space-x-3 tracking-normal ">
            I&apos;m Subhash, Creative Frontend
            <span className="bg-white text-black rounded-b-3xl px-4 rounded-tl-3xl ">
              Developer.
            </span>
          </h1>
        </div>
        <div className="w-full text-center flex items-center justify-center mb-0">
          <p className="text-lg w-[50%] ">
            I develop accessible, responsive, interactive, and animated websites
            with a strong focus on performance.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
