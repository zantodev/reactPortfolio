import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center my-16 ">
      <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-3xl tracking-widest text-[#5651e5] py-4 text-2xl">
            Who I Am
          </p>
          {/* <h2 className="py-4 text-2xl">Who I Am</h2> */}
          {/* <p className="py-2 text-gray-600">I am not your normal developer</p> */}
          <div className="w-full">
            <div className="flex py-4">
              <div className="flex justify-center items-center px-2 text-2xl">
                <GoPrimitiveDot />
              </div>
              <div>
                <h2 className="text-2xl">
                  Experienced freelance web developer using JavaScipt, HTML,
                  CSS, Node.JS, Express.JS, and MongoDB.
                </h2>
              </div>
            </div>
            <div className="flex py-4">
              <div className="flex justify-center items-center px-2 text-2xl">
                <GoPrimitiveDot />
              </div>
              <div>
                <h3 className="text-2xl">
                  Also experienced with frameworks like Vite.JS, React.JS, and
                  Tailwind CSS, targeting Full-Stack specific roles.
                </h3>
              </div>
            </div>
          </div>
          {/* <h5 className="py-2 text-gray-600">
            1+ Year using Node.JS, Express.JS,
            mongoDB Recently, I started getting familiar with frameworks like
            Vite.JS, React.JS, and Tailwind CSS, targeting Full-Stack specific
            roles.
          </h5> */}
          {/* <p className="py-2 text-gray-600">
            I am now seeking a role in a full-stack enviroment.
          </p> */}
          {/* <p className="py-2 text-gray-600">
            I like to spend my free time with my family, my dogs, riding
            motorcycles, hiking, and coaching kids football.
          </p> */}
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p> */}
        </div>
        {/* <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dck687wut/image/upload/v1669088293/2EE461EA-A4AE-41E4-AC26-333777E0297C_1_201_a-removebg-preview_a78gym.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
