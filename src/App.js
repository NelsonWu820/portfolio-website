import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import city from "./static/36280535712_761eb51e97_b.jpg"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header image={city}/>
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
