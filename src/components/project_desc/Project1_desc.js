import { Link } from "react-router-dom"
import Footer from "../Footer"

const Project1_desc = ({ photo }) => {
  const liveUrl = "https://nelsonwu820.github.io/photo_filter_react/"
  const sourceUrl = "https://github.com/NelsonWu820/photo_filter_react"
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

      <div className="p1_holder">
        <img src={photo} className="p1_img"></img> 
        <button className="p1_btn_live" onClick={() => window.open(liveUrl)}>Live Version</button> 
        <button className="p1_btn_source" onClick={() => window.open(sourceUrl)}>Source Code</button>
        <h1>Description</h1>
        <p>This is a web app made Using mainly React and JavaScript with HTML and CSS. Photo Filter
        uses a static JSON file to hold the links and tags of the images and then takes the user's
        input to return a photos that have the tags. But it will also return photos that have all the user's
        tags plus tags that where not part of the user's input.</p>
        <p></p>
        <h1>Purpose</h1>
        <p>The purpose of this Photo Filter was to improve on my React abilities but have a JSON
        file that the app can pull from. I was originally going to use the Unsplash Image API as 
        it is a JSON API but I ran out of time and had to cut corners, so instead I have a static
        JSON file that holds the links of the images with their tags. I do want to eventually add
        the API to the project.</p>
        <p></p>
        <h1>Problems And Thought Process</h1>
        <p>The main problem that I had was trying to get the relative link inside my JSON file 
        to render the image when placed inside the img tag. As when I first just placed the relative
        link inside the img tag it would not render the img and I had to scourer a bunch of stack overflow
        posts about closely related topic, and asking chatGPT but not getting anywhere. Until I found one 
        stack overflow post that was 3 years old and had 5 upvotes. Another problem I had was the logic to
        loop through that JSON file but I was able to get over it by thinking it out and using the VScode debugging
        panel.</p>
      </div>
      <div className="p1_empty"></div>
      <Footer/>
    </section>
  )
}

export default Project1_desc