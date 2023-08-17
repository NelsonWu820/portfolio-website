import HomePage from "./HomePage";
import Project1_desc from "./components/project_desc/Project1_desc";
import Project2_desc from "./components/project_desc/Project2_desc";
import Project3_desc from "./components/project_desc/Project3_desc";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import photo_filter from "./static/photo_filter.png"
import todo from "./static/todo_list.png"
import amazonLike from "./static/Screenshot (3).png"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route exact path="/Project1" element={<Project1_desc photo={photo_filter} />}>
          </Route>
          <Route exact path="/Project2" element={<Project2_desc photo={todo} />}>
          </Route>
          <Route exact path="/Project3" element={<Project3_desc photo={amazonLike}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
