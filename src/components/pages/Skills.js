import { CodeIcon } from "@heroicons/react/solid";
// import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import React from "react";
import { skills } from "../../data";
import resumePDF from "../../assets/Israel_Aguilar_Resume.pdf"

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <CodeIcon className="w-12 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Feel free to download my:
          </p>
          <p className="text-3xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            
            <a href = {resumePDF} className = " text-indigo-100 bg-gray-800 hover:bg-gradient-to-r border-0 py-2 px-6 rounded text-lg" download>Resume</a>
          </p>

        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="w-6 h-6 flex-shrink-0 mr-4">
                  {skill.icon} 
                </span> 
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
