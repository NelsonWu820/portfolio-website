import { Link } from "react-router-dom"

const Project3_desc = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
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
  )
}

export default Project3_desc