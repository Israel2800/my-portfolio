import React from 'react';
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"

const Footer = () => {
  return (
    <footer className="footer bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <div className='title-font text-lg font-medium text-white mb-3 underline underline-offset-8 items-center justify-center'>
            <a className='iconDeclared' href="https://github.com/Israel2800" target="_blank" rel="noreferrer">  
            <p><SiMongodb /></p>
            </a>
            <a className='iconDeclared' href="https://www.linkedin.com/in/israel-aguilar-292b97243/" target="_blank" rel="noreferrer">
                <i class="fa fa-linkedin centerIcon iconProp"></i>
            </a>
            <a className='iconDeclared' href="https://stackoverflow.com/users/18821721/israel-aguilar" target="_blank" rel="noreferrer">
                <i class="fa fa-stack-overflow centerIcon iconProp"></i>
            </a>
            
        </div>
            
            <h4 className='footPhrase'>
            Made with{' '}
            <span
                className="emoji"
                role="img"
                aria-label="brain"
                aria-hidden="false"
            >
                🧠
            </span>{' '}
            by Israel Aguilar.
            </h4>
        
      </div>
    </footer>
  );
};

export default Footer;
