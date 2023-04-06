import { Link } from "react-router-dom"
import photo_filter from "../static/photo_filter.png"

const Project1 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img class="project1_img" src={photo_filter} alt="Todo List"/>
      </div>
      <div class="project1_text">
        <h3 class="title">Photo Filter</h3>
        <p>A simple web app made using JavaScript, HTML, CSS, and React to create a agile and dynamic application that takes
        the users input and will return photos with the tags given by the user if available.</p>
        <button> 
          <Link to="/Project1" className="project1_link">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project1