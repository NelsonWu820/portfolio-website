import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ProjectTitle from "./components/ProjectTitle";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer"; 

const HomePage = () => {
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
    <div>
        <Header/>
        <Navbar onClick={Scroll_Home} onClick2={Scroll_Skills} onClick3={Scroll_ProjectTitle} onClick4={Scroll_AboutMe} onClick5={Scroll_ContactMe}/>
        
        <ProjectTitle/>
        <Project1/>
        <Project2/>
        <Project3/>
        <AboutMe/>
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default HomePage

