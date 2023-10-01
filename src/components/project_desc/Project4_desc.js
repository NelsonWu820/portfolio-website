import { Link } from "react-router-dom"
import { useEffect } from "react";
import Footer from "../Footer";

const Project4_desc = ({photo}) => {
  useEffect(() => {window.scroll(0,0)});
  const sourceUrl = 'https://github.com/NelsonWu820/amazonLike'
  return (
    <section className="p3_desc">
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
  
      <div className="p3_holder">
      <img src={photo} className="p3_img"></img> 
      <button className="p3_btn_source" onClick={() => window.open(sourceUrl)}>Source Code</button>
      <h1>Description</h1>
      <p>This is my most complex web app to date. As the name suggests this will be an Amazon clone, where the frontend will
      be made using HTML, CSS and React with redux to manage states. The backend will use Nodejs with express, and uses mongoose 
      to interacte with MongoDB Atlas. The Product Advertising API will be used just to fill in the default products and will 
      periodically update the default selection, but products can be added manually using a seller account.
      </p>
      <p></p>
      <h1>Purpose</h1>
      <p>The main purpose of this Amazon clone is to test my MERN skills and prove that I can work with a full stack application. 
      That uses a dynamic frontend to talk to a Node backend, which will actually store data to be used later. Which will also
      include the use of an API (Product Advertising API) to fill in some of the products.
      </p>
      <p></p>
      <h1>Problems And Thought Process</h1>
      <p>As this web app is complete yet I don't have a full list of problems that I encounterd yet, especially 
      the Product Advertising API as I haven't implemented it yet. This is the first time that I have worked with 
      a database within a full stack web app, also as I have never used a document based database it took me 
      a while to get used to MongoDB coming from a SQL background. Also the use of redux and global states was 
      a unqiue add on to base React.</p>
      </div>
      <div className="p3_empty"></div>
      <Footer/>
    </section>
  )
}

export default Project4_desc