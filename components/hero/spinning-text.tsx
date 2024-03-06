"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SpinningText = () => {
  const [text] = useState("-  Subhash Nayak  -  Frontend  -  Developer");
  const textRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (textRef.current)
      textRef.current.innerHTML = text
        .split("")
        .map((char, i) => {
          return `<span style="transform:rotate(${i * 8}deg)">${char}</span>`;
        })
        .join("");
  });
  return (
    <div className="circle relative w-52 h-52 rounded-full flex justify-center items-center scale-50 transition-all hover:scale-100">
      <div className="text w-full h-full absolute rounded-full flex text-xl">
        <p ref={textRef}></p>
      </div>
      <div className="absolute grid place-content-center rounded-full overflow-hidden logo">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default SpinningText;
