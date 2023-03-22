import { Link } from "react-router-dom"

const Project3 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img class="project1_img" alt="In Progress"/>
      </div>
      <div class="project1_text">
        <h3 class="title">In Progress</h3>
        <p>In Progress.</p>
        <button>
          <Link to="/Project3" className="project1_link">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project3