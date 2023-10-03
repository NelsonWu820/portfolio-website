import { Link } from "react-router-dom"
import DeveloperNetwork from "../static/DeveloperNetworkFinal.png";

const Project2 = () => {
  return (
    <section className="project1_wrapper">
      <div className="project2_img">
        <img src={DeveloperNetwork} className="project1_img" alt="In Progress"/>
      </div>
      <div className="project1_text">
        <h3 className="title">DeveloperNetwork</h3>
        <p>A website developed using the MERN stack to create a developer network, offering a social
        platform for developers to connect, collaborate, and share their knowledge and experiences. MongoDB 
        stores the users account along with any post or comments that they make. While Express.js and Node.js 
        will handle the backend and determine the response, that will come from React using Redux to manage 
        global states.</p>
        <button className="btn-holder">
          <Link to="/Project2" className="button-27">View It Here</Link>
        </button>
      </div>
    </section>
  )
}

export default Project2