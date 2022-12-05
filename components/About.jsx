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
            I am a creative and detail-oriented Full-Stack Software Engineer
            experienced in building web applications for small and large
            businesses. With 6 years of experience in the logistics field, I
            have discovered the lack of quality tracking applications needed for
            this fast-paced industry. This led me to my current path and passion
            to create technologies for businesses that have fallen behind in the
            new tech based world. As a freelance agent, I have provided clients
            with a user-friendly interface for their business using Javascript,
            React, and Node to reflect the company's brand.
          </p>
          <p className="py-2 text-gray-600">
            I am now seeking to join a company with a global reach and work with
            a team to provide my skills and follow my interest in helping
            businesses update their systems
          </p>
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
            src="https://res.cloudinary.com/dck687wut/image/upload/v1669088293/2EE461EA-A4AE-41E4-AC26-333777E0297C_1_201_a-removebg-preview_a78gym.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
