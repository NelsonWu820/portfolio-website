import { Link } from "react-router-dom"

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
        <p></p>
        <h1>Purpose</h1>
        <p></p>
        <h1>Problems And Thought Process</h1>
        <p></p>
      </div>
    </section>
  )
}

export default Project2_desc