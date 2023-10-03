import { Link } from "react-router-dom";
import Footer from "../Footer";
import { useEffect } from "react";
import {MdOutlineLiveTv} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Project1_desc = ({ photo }) => {
  useEffect(() => {window.scroll(0,0)});
  const liveUrl = "https://amazonlike.onrender.com"
  const sourceUrl = 'https://github.com/NelsonWu820/amazonLike'
  return (
    <section className="p3_desc">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent justify-content-between fixed-top" id="navbar_parent">
        <div className="navbar-brand text-black">
          <Link to="/" className="project1_link">NelsonWu</Link>
        </div>
        
        <div className="form-inline" data-toggle="collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div className="nav-link text-black">
                    <Link to="/" className="project1_link">Home</Link>
                  </div>      
                </li>
            </ul>
        </div>
      </nav>
  
      <div className="p_holder">
      <img src={photo} className="p_img" alt=".../"></img> 
      <div className="p1_btn_live">
        <button className="button-31"onClick={() => window.open(liveUrl)}> <MdOutlineLiveTv className="live_icon"/>Live Version (It might take a while, as I deployed it using a free plan on Render)</button> 
      </div>
      <div className="p1_btn_source">
        <button className="button-31" onClick={() => window.open(sourceUrl)}> <FaGithub className="source_icon"/>Source Code</button>
      </div>        
      <h1>Description</h1>
      <p>This is my most complex web app to date. This web application is made using MERN (MongoDB, Express.js, React, Node.js) where MongoDB 
      is the database, Express.js is a framework that runs on Node.js that makes it much easier to write API's. While React is used for the frontend with Redux to
      manage global states, and Node.js is used for the server side. As the name suggests this will be an Amazon clone where users will be able
      to add items to cart then purchase from there, as well as leave comments and rating on items. Where the Fake Store API will be used to fill up the items in the store.
      </p>
      <p></p>
      <h1>Purpose</h1>
      <p>The main purpose of this Amazon clone is to test my MERN skills and prove that I can work with a full stack application. 
      That uses a dynamic frontend to talk to a Node backend, which will actually store data to be used later. Which will also
      include the use of an API (Fake Store API) to fill in some of the products.
      </p>
      <p></p>
      <h1>Problems And Thought Process</h1>
      <p>
        The general idea was preety clear as I wanted to build an Amazon clone so I just looked at what amazon was doing. The problem
        with that, is that Amazon is a huge company I quickly realized how big this project was going to be if I wanted to add 
        every feature Amazon had. So I quickly had to cut a lot of features as I did not have the time to make the perfect web application,
        so I just stuck to the basics of buy and rating items. At first I wanted to fill the store using Amazon's Product Advertesting API
        but the thing is to get access to the API I would have to become an Amazon affliate and actually sell items, then go through a
        review and even if I got through the review somehow I would have periodically give Amazon evidence I'm actually selling stuff. 
        But I just wanted to test my skills so I just opted for the much simpler Fake Store API.
      </p>
      </div>
      <div className="p3_empty"></div>
      <Footer/>
    </section>
  )
}

export default Project1_desc