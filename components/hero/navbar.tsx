import React from "react";
import SpinningText from "./spinning-text";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full px-10 h-28 items-center z-10 bg-transparent max-sm:scale-90 max-sm:flex-col">
      <SpinningText className="max-sm:absolute max-sm:top-10" />
      <a href="mailto:subhashnayak131@gmail.com">
        <div className="border p-4 rounded-full flex w-fit items-center justify-center gap-2  mr-20 scale-90 hover:scale-100 transition-all cursor-pointer max-sm:w-full">
          <div className="p-1 rounded-full bg-[#2AED5D] h-5 w-5  grid place-content-center">
            <div className="h-2 w-2 rounded-full bg-black" />
          </div>
          <p className="text-sm text-white max-sm:text-xs">
            Available for new projects.
          </p>
          <div className="bg-white text-black p-1 px-4 rounded-full text-xs">
            <p>contact</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
