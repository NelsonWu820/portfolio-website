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

function App() {
  const Scroll_Home = () => {
    const element = document.getElementById("Header");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const Scroll_Skills = () => {
    const element = document.getElementById("Skills");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="App">
      <Header/>
      <Navbar onClick={Scroll_Home} onClick2={Scroll_Skills}/>
      <Skills/>
      <ProjectTitle/>
      <Project1/>
      <Project2/>
      <Project3/>
      <AboutMe/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
