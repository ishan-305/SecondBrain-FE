"use client";
import React from "react";

export const Navbar = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center items-center px-16 py-6 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-5 justify-between items-center w-full max-w-[1215px] max-md:max-w-full">
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f43ffdfd27e07697827c2dd20a8e13b24bbc36b967389f50e6ca565185d0745"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.46] w-[35px]"
            alt="Company logo icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3e032e9a0a1deb74a3719f292846278c263a88d25b0ef14bd72dd44ce917bc5"
            className="object-contain shrink-0 self-stretch my-auto aspect-[5.56] fill-gray-800 w-[111px]"
            alt="Company logo text"
          />
        </div>

        <ul className="flex overflow-hidden flex-wrap gap-10 justify-center items-center self-stretch my-auto text-base whitespace-nowrap text-zinc-900 max-md:max-w-full">
          <li className="font-medium">Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>

        <div className="flex overflow-hidden gap-3.5 items-start self-stretch text-sm font-medium leading-none text-center">
          <button className="gap-2.5 self-stretch px-5 py-2.5 text-green-500 whitespace-nowrap rounded-md bg-slate-100">
            Login
          </button>
          <button className="gap-2.5 self-stretch px-5 py-2.5 text-white bg-green-500 rounded-md">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};
