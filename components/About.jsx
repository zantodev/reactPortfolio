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
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col items-center justify-center">
                <h3>
                  Software Engineer with a proven track record of creating and
                  implementing successful front and back-end web applications
                  with a strong understanding of HTML, CSS, and JavaScript.
                </h3>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col items-center justify-center">
                <h3>
                  Background experience in fire suppression systems. Community
                  volunteer as a coach for local kids basketball and football
                  teams. I’m looking to bring my software skills to a tech
                  company with global reach.
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
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dck687wut/image/upload/v1673386963/AA490DE9-F829-4362-B446-725125A23E46_1_105_c_rdibkg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
