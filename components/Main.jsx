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
          <h1 className="py-4 w-full text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Tony</span>, A Software
            Engineer!
          </h1>

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
