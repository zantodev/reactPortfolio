import Image from "next/image";
import Link from "next/link";
import React from "react";
import openaiImg from "../public/assets/projects/openai.png";
import reactsiteImg from "../public/assets/projects/reactsite.png";
import apiImg from "../public/assets/projects/api.png";
import fsappImg from "../public/assets/projects/fsapp.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5]">
          What I've Built
        </p>
        {/* <h2 className="py-4 text-2xl">What I've Built</h2> */}
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="The Website You Are On Right Now"
            backgroundImg={reactsiteImg}
            projectUrl="/reactsite"
            techUsed="React | Node.js | TailwindCSS"
          />
          <ProjectItem
            title="Nasa Picture Of The Day API Web App"
            backgroundImg={apiImg}
            projectUrl="/nasaapi"
            techUsed="HTML | CSS | JavaScript | NASA API"
          />
          <ProjectItem
            title="Full-Stack Photo Sharing App"
            backgroundImg={fsappImg}
            projectUrl="/fsapp"
            techUsed="JavaScript | NodeJS | MongoDB | ExpressJS"
          />
          <ProjectItem
            title="CodeX OpenAI API App"
            backgroundImg={openaiImg}
            projectUrl="/openai"
            techUsed="HTML | CSS | JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
