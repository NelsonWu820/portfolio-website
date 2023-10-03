import { Link } from "react-router-dom"
import AmazonLike from "../static/amazon_like.png";

const Project1 = () => {
  return (
    <section className="project1_wrapper">
      <div className="project1_img">
        <img src={AmazonLike} className="project1_img" alt="In Progress"/>
      </div>
      <div className="project1_text">
        <h3 className="title">AmazonLike</h3>
        <p>A website that uses the MERN stack to create a clone of amazon. Using MongoDB to store a users profile and cart, as well as dynamically updating the store with new products added by sellers.  
        With the default catalog of items being taken from Amazon’s Product Advertising API. </p>
        <button className="btn-holder">
          <Link to="/Project1" className="button-27">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project1