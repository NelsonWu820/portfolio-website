import { Link } from "react-router-dom"
import In_Progress from "../static/Screenshot (3).png"

const Project1 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img src={In_Progress} class="project1_img" alt="In Progress"/>
      </div>
      <div class="project1_text">
        <h3 class="title">AmazonLike</h3>
        <p>A website that uses the MERN stack to create a clone of amazon. Using MongoDB to store a users profile and cart, as well as dynamically updating the store with new products added by sellers.  
        With the default catalog of items being taken from Amazon’s Product Advertising API. </p>
        <button>
          <Link to="/Project1" className="project1_link">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project1