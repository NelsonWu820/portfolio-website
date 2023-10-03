import { Link } from "react-router-dom";
import photo_filter from "../static/photo_filter2.png";

const Project3 = () => {
  return (
    <section className="project1_wrapper">
      <div className="project3_img">
        <img className="project1_img" src={photo_filter} alt="Todo List"/>
      </div>
      <div className="project1_text">
        <h3 className="title">Photo Filter</h3>
        <p>A simple web app made using JavaScript, HTML, CSS, and React to create a agile and dynamic application that takes
        the users input and will return photos with the tags given by the user if available.</p>
        <button className="btn-holder">
          <Link to="/Project3" className="button-27">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project3