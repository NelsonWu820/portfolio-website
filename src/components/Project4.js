import React from 'react';
import { Link } from "react-router-dom"
import todo from "../static/todo_list.png"

const Project4 = () => {
    return (
        <section class="project1_wrapper">
            <div class="project1_img">
            <img  src={todo} class="project1_img" alt="In Progress"/>
            </div>
            <div class="project1_text">
            <h3 class="title">Todo List</h3>
            <p>A light weight and agile web app Made with Javascript and React. This simple todo app is
            browser based only, so it will add tasks but the tasks will only stay on that instance.</p>
            <button>
                <Link to="/Project4" className="project1_link">View It Here</Link>
            </button>
            </div>
        </section>
    );
}

export default Project4;
