import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Skills/>
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
