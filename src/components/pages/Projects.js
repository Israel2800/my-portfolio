import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";
// import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode"
// import img from '../../assets/projects/'

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <DesktopComputerIcon className="mx-auto inline-block w-10 mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1> 
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here you can see my most recent projects with the different technologies applied to each one. You can
            go to the live webpages or the link of each repository in my GitHub account, have fun!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4" target="blank">
              <div className="flex relative">
                <img
                  alt="Project"
                  className="absolute inset-0 w-full h-full object-center"
                  src={project.image}
                  // style={{ width:"450px", height:"250px" }}
                />
                <div className="px-8 py-10 relative z-auto w-full h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-100 mb-1">
                    {project.tools}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 underline underline-offset-8">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
