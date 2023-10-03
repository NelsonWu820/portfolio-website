import React from 'react';
import { Link } from "react-router-dom"
import todo from "../static/todo_list2.png"

const Project4 = () => {
    return (
        <section className="project1_wrapper">
            <div className="project4_img">
            <img src={todo} className="project1_img" alt="In Progress"/>
            </div>
            <div className="project1_text">
            <h3 className="title">Todo List</h3>
            <p>A light weight and agile web app Made with Javascript and React. This simple todo app is
            browser based only, so it will add tasks but the tasks will only stay on that instance.</p>
            <button className="btn-holder">
                <Link to="/Project4" className="button-27">View It Here</Link>
            </button>
            </div>
        </section>
    );
}

export default Project4;
