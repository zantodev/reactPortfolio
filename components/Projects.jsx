import Image from "next/image";
import Link from "next/link";
import React from "react";
import bankImg from "../public/assets/projects/hoobank.png";
import apiImg from "../public/assets/projects/api.png";
import fsappImg from "../public/assets/projects/fsapp.png";
import musicImg from "../public/assets/projects/music.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-2xl">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={bankImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={apiImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={fsappImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={musicImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
