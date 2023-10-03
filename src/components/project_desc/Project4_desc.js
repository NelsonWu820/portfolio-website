import { Link } from "react-router-dom"
import { useEffect } from "react";
import Footer from "../Footer";
import {MdOutlineLiveTv} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Project4_desc = ({photo}) => {
  useEffect(() => {window.scroll(0,0)});
  const liveUrl = "https://nelsonwu820.github.io/react-task-tracker/"
  const sourceUrl = "https://github.com/NelsonWu820/react-task-tracker"
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between fixed-top" id="navbar_parent">
        <div className="navbar-brand text-black">
          <Link to="/" className="project1_link">NelsonWu</Link>
        </div>
        
        <div className="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div className="nav-link text-black">
                    <Link to="/" className="project1_link">Home</Link>
                  </div>      
                </li>
            </ul>
        </div>
      </nav>

      <div className="p_holder">
        <img src={photo} className="p_img" alt=".../"></img> 
        <div className="p1_btn_live">
          <button className="button-31"onClick={() => window.open(liveUrl)}> <MdOutlineLiveTv className="live_icon"/>Live Version</button> 
        </div>
        <div className="p1_btn_source">
          <button className="button-31" onClick={() => window.open(sourceUrl)}> <FaGithub className="source_icon"/>Source Code</button>
        </div> 
        <h1>Description</h1>
        <p>This is a pretty simple Todo List web app made from React, the web app doesn't update a database
        like MongoDB or a JSON file yet. So any tasks that are added will only be displayed until the user
        reloads that page, with the exception of one default task that was placed in by me.</p>
        <p></p>
        <h1>Purpose</h1>
        <p>The main purpose of this Todo app was to test and improve my React skills as the JavaScript
        Logic is pretty light in this app.</p>
        <p></p>
        <h1>Problems And Thought Process</h1>
        <p>As this web app is pretty light on features the main problems I faced was just getting used 
        to building a React app. Where I had to test my React fundamentals with stuff like useState, 
        passing in functions from my main JavaScript file, adding logic to the JSX, etc. I was able to 
        finish this project with the help of stack overflow and google.</p>
      </div>
      <div className="p2_empty"></div>
      <Footer/>
    </section>
  )
}

export default Project4_desc