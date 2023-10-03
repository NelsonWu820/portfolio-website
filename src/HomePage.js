import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ProjectTitle from "./components/ProjectTitle";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from './components/Project4';
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer"; 

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define the threshold height at which you want to change the class
      const thresholdHeight = 500;
      const scrollHeight = window.scrollY;

      if (scrollHeight >= thresholdHeight && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollHeight < thresholdHeight && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]); 

  const elementClass = isScrolled ? 'navbar navbar-expand navbar-light justify-content-between fixed-top navbar-below' : 'navbar navbar-expand navbar-light bg-transparent justify-content-between fixed-top';

    const Scroll_Home = () => {
        const element = document.getElementById("header_id");
        if (element) {
          // Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const Scroll_Skills = () => {
        const element = document.getElementById("skills_id");
        if (element) {
          // Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const Scroll_ProjectTitle = () => {
        const element = document.getElementById("project_title_id");
        if (element) {
          // Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const Scroll_AboutMe = () => {
        const element = document.getElementById("aboutMe_id");
        if (element) {
          // Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const Scroll_ContactMe = () => {
        const element = document.getElementById("contactMe_id");
        if (element) {
          // Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className='homepage-holder'>
        <Header/>
        <Navbar name={elementClass} onClick={Scroll_Home} onClick2={Scroll_Skills} onClick3={Scroll_ProjectTitle} onClick4={Scroll_AboutMe} onClick5={Scroll_ContactMe}/>
        <Skills/>
        <ProjectTitle/>
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <AboutMe/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default HomePage

