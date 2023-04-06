import { Link } from "react-router-dom"
import In_Progress from "../static/In_Progress.jpg"

const Project3 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img src={In_Progress} class="project1_img" alt="In Progress"/>
      </div>
      <div class="project1_text">
        <h3 class="title">In Progress</h3>
        <p>In Progress.</p>
      </div>
    </section>
  )
}

export default Project3