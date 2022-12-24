import React from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaAngellist } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="mx-auto max-w-7xl pt-48 ">
      <div className="mx-auto justify-center ">
        <div className="w-full">
          {/* <p className="uppercase text-sm tracking-widest  text-gray-600">
            Lets Build Something Together!
          </p> */}
          <h1 className="py-4 w-full text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Tony</span>, A Software
            Engineer!
          </h1>
          {/* <h1 className="py-2 text-gray-700">A Software Engineer!</h1> */}
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Web Developer specializing in building exceptional digital
            experiences. Currently, I'm focused on building responsive
            full-Stack applications.
          </p> */}
          {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pb-16">
            <a
              href="https://www.linkedin.com/in/tonyhelloworld/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/zantodev" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="https://twitter.com/tonyhelloworld" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillTwitterCircle />
              </div>
            </a>
            <a href="https://angel.co/u/tonyhelloworld" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaAngellist />
              </div>
            </a>
          </div> */}
          <Link href="/#contact">
            <div className="md:flex">
              <button
                type="button"
                class="inline-block mt-6 px-6 py-2.5 bg-[#5651e5] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Lets Connect!
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
