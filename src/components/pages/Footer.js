import React from 'react';
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center">
      <div className="px-6 pt-4 pb-4">
        <div className="flex justify-center mb-2">
            <a className="w-12" href="https://github.com/Israel2800" target="_blank" rel="noreferrer">  
              <SiGithub className="w-7 h-full mx-auto fill-cyan-100 hover:fill-sky-300" />
            </a>
            <a className="w-12 text-white" href="https://www.linkedin.com/in/israel-aguilar-292b97243/" target="_blank" rel="noreferrer">  
              <AiOutlineLinkedin className="w-9 h-full mx-auto fill-cyan-100 hover:fill-sky-300" />
            </a>
            <a className="w-12 text-white" href="https://stackoverflow.com/users/18821721/israel-aguilar" target="_blank" rel="noreferrer">  
              <FaStackOverflow className="w-7 h-full mx-auto fill-cyan-100 hover:fill-sky-300" />
            </a>
            
        </div>
        <div className="git"> 
          © 2022 Israel Aguilar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
