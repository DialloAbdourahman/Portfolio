import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import ScrollUpButton from './components/ScrollUpButton';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Experience />
      <Contact />
      <Footer />
      {showScrollButton && <ScrollUpButton />}
    </>
  );
}

export default App;
