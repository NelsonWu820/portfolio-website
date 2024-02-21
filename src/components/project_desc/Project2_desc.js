import { Link } from "react-router-dom"
import Footer from "../Footer"
import { useEffect } from "react";
import {MdOutlineLiveTv} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Project2_desc = ({ photo }) => {
  useEffect(() => {window.scroll(0,0)});
  const liveUrl = "https://developer-network-frontend.vercel.app"
  const sourceUrl = 'https://github.com/NelsonWu820/DeveloperNetwork'
  return (
    <section className="p3_desc">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
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
        <button className="button-31"onClick={() => window.open(liveUrl)}> <MdOutlineLiveTv className="live_icon"/>Live Versio</button> 
      </div>
      <div className="p1_btn_source">
        <button className="button-31" onClick={() => window.open(sourceUrl)}> <FaGithub className="source_icon"/>Source Code</button>
      </div>          
      <h1>Description</h1>
      <p>This web application is made using MERN (MongoDB, Express.js, React, Node.js) where the frontend will
      be made using HTML, CSS and React with Redux to manage states. The backend will use Nodejs with Express.js, 
      and uses mongoose to interacte with MongoDB Atlas. The app is meant to mimic a basic social media app, where users
      can make a post to a general chat that can be commented on by other users, and liked. Each user can have a profile that has their
      basic information, education, skills, experiences, etc. Users can also link social media accounts as well as github repos which can
      be seen when another user looks at their profile.
      </p>
      <p></p>
      <h1>Purpose</h1>
      <p>The main purpose of this Developer Network was to test my skills in building web applications using the MERN stack. As well as to
        try at building a web application where users can interacte with other users. As well as to see how the github access token works
        in live applications. 
      </p>
      <p></p>
      <h1>Problems And Thought Process</h1>
      <p>
        This is the first time that I have worked with a database within a full stack web app,
        also as I have never used a document based database it took me a while to get used to MongoDB coming 
        from a SQL background. So when building my data models for the web application I tried to make them
        relation before realizing that I had to learn how to properly store data in a document database.
        Also the use of redux and global states was a unqiue add on to base React, but it allowed me 
        to do a lot with affecting multiple compoenents at once. 
      </p>
      </div>
      <div className="p3_empty"></div>
      <Footer/>
    </section>
  )
}

export default Project2_desc