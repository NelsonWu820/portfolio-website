import todo from "../static/to-do-list.png"

const Project1 = () => {
  return (
    <section class="project1_wrapper">
      <div class="project1_img">
        <img class="project1_img" src={todo} alt="Todo List"/>
      </div>
      <div class="project1_text">
        <h3 class="title">Todo List</h3>
        <p>A simple and slick web-based todo app. Using React to create a fast and agile user experience.</p>
        <button class="project1_btn">Full View</button>
      </div>
    </section>
  )
}

export default Project1