import React from "react";
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
    <div id="home" className="mx-auto max-w-7xl h-4/6 pt-64 ">
      <div className=" lg:px-8 mx-auto justify-center ">
        <div className="w-full">
          {/* <p className="uppercase text-sm tracking-widest  text-gray-600">
            Lets Build Something Together!
          </p> */}
          <h1 className="py-4 w-full px-0 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Tony</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer!</h1>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Web Developer specializing in building exceptional digital
            experiences. Currently, I'm focused on building responsive
            full-Stack applications.
          </p> */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
