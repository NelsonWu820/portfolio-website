import { Link } from "react-router-dom"
import Footer from "../Footer"

const Project2_desc = ({ photo }) => {
  const liveUrl = "https://nelsonwu820.github.io/react-task-tracker/"
  const sourceUrl = "https://github.com/NelsonWu820/react-task-tracker"
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-between fixed-top" id="navbar_parent">
        <div class="navbar-brand text-black">
          <Link to="/" className="project1_link">NelsonWu</Link>
        </div>
        
        <div class="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <div class="nav-link text-black">
                    <Link to="/" className="project1_link">Home</Link>
                  </div>      
                </li>
            </ul>
        </div>
      </nav>

      <div className="p2_holder">
        <img src={photo} className="p2_img"></img> 
        <button className="p2_btn_live" onClick={() => window.open(liveUrl)}>Live Version</button> 
        <button className="p2_btn_source" onClick={() => window.open(sourceUrl)}>Source Code</button>
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

export default Project2_desc