import Image from "next/image";
import React from "react";
import fsappImg from "../public/assets/projects/fsapp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const fsapp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />

        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={fsappImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Full-Stack Photo Sharing Web App</h2>
          <h3>React JS / Tailwind / Netlify / JavaScript </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          {/* <p>Project</p> */}
          <h2 className="py-4 text-lg">Project Overview</h2>
          <p className="py-4">
            This is a photo sharing application built using modern full-stack
            Technologies. The back-end was build with node, ejs, and oauth for
            authenticaiton. A user can make an account, upload photos, see other
            user's photos, leave likes and comments as well as delete any from
            the options.
          </p>
          <a href="https://github.com/zantodev" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/zantodev" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {/* <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p> */}
              {/* <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p> */}
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              {/* <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
              </p> */}
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default fsapp;
