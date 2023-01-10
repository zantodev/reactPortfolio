import Image from "next/image";
import React from "react";
import reactsiteImg from "../public/assets/projects/reactsite.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const reactsite = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />

        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={reactsiteImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Modern React Portfolio Website</h2>
          <h3>Vite JS / Tailwind / Netlify</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The technologies used in this code include: Next.js: a JavaScript
            framework for building server-rendered React applications. It allows
            you to build isomorphic (universal) applications that run both on
            the server and the client. JSX: a syntax extension for JavaScript
            that allows you to write HTML-like code in your JavaScript files.
            JSX is supported by React and Next.js, and it is used to define the
            structure and layout of the UI in this code. React: a JavaScript
            library for building user interfaces. It is used in conjunction with
            Next.js to define the UI components that make up the webpage.
          </p>
          <a href="https://tonyhelloworld.com" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/zantodev/reactPortfolio" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GitHub
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

export default reactsite;
