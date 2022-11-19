import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-3xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-2xl">Who I Am</h2>
          {/* <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p> */}
          <p className="py-2 text-gray-600">
            I'm a passionate software engineer who constantly seeks out new
            technologies and innovative solutions to everyday problems. In my
            five years as a freelance web developer, I've honed my analytical
            thinking and collaboration skills, and I love working with different
            teams.
          </p>
          <p className="py-2 text-gray-600">
            While freelancing, I completed a one-year internship, where I honed
            my web app development skills, including modern web technologies
            such as, MongoDB, Express.JS, REACT.JS, Node.JS, Tailwind CSS, and
            others.
          </p>
          <p className="py-2 text-gray-600">
            I like to spend my free time with my family, my dogs, riding motorcycles, hiking, and coaching kids football.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://res.cloudinary.com/dck687wut/image/upload/v1668819913/B366EB33-5DB3-4F50-A8BF-7059CF222463_1_102_a_eqdycn.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
