import React from 'react';
import { saveAs } from 'file-saver';
import MyResume from '../../assets/Israel_Aguilar_Resume.pdf'

// const saveFile = () => {
//   fileSaver.saveAs(
//     process.env.REACT_APP_CLIENT_URL + "../../assets/Israel_Aguilar_Resume.pdf",
//     "Israel_Aguilar_Resume.pdf"
//   );
// };

export default function Resume() {
  return (
    
    <section className="who-am-i">
      
      <h1>This is my Resume!</h1>
      <div className='myResume'>
        {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}
        <a href={MyResume} download="Israel_Aguilar_Resume.pdf" target="_blank" rel="noopener noreferrer"> Download Here </a>
        {/* <a href={MyResume} target="_blank" rel="noopener noreferrer" download>
          <Button>
              <i className="fas fa-download"/>
              Download File
          </Button>
        </a> */}

      {/* <button className="cv" onClick={saveFile}>
          Download File
      </button> */}

        
      </div>
    </section>
  );
}
