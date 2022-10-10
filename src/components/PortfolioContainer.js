import React, { useState } from 'react';
import About from './pages/About';
import Navbar from './pages/Navbar';
// simport About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Skills from './pages/Skills';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage ==='Contact') {
      return <Contact />;
    }
      return <Skills />;
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className="text-indigo-100 bg-gradient-to-r from-blue-700 to-cyan-500 body-font">
      <Router>
          <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
            
              <Footer />
          </div>
      </Router>
    </main>

  );
}
