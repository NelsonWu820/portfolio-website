import { Link } from "react-router-dom"

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
        <p></p>
        <h1>Purpose</h1>
        <p></p>
        <h1>Problems And Thought Process</h1>
        <p></p>
      </div>
    </section>
  )
}

export default Project1_desc