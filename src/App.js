import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import ScrollUpButton from './components/ScrollUpButton';
import Projects from './components/Projects';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth > 900) {
        setShowSidebar(false);
      }
    };

    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 110) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Hero />
      <About />
      <Projects />
      {showScrollButton && <ScrollUpButton />}
    </>
  );
}

export default App;

// find the real background color of each single project.
// make the project container responsive.
// give a hover effect to every single project i.e moves up a bit when we hover it.
// try and see if it will be a good idea to change the a single project into a link instead.

// Fix your heroku apps using this link https://dashboard.heroku.com/apps/mighty-forest-46842/deploy/heroku-git
// visite all the websites online and make sure that they are working correctly.
