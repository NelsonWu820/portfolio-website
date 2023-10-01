import { Link } from "react-router-dom"
import In_Progress from "../static/Screenshot (3).png"

const Project2 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img src={In_Progress} class="project1_img" alt="In Progress"/>
      </div>
      <div class="project1_text">
        <h3 class="title">DeveloperNetwork</h3>
        <p></p>
        <button>
          <Link to="/Project2" className="project1_link">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project2