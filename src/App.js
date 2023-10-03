import './App.css'
import HomePage from "./HomePage";
import Project1 from "./components/project_desc/Project1_desc";
import Project2 from "./components/project_desc/Project2_desc";
import Project3 from "./components/project_desc/Project3_desc";
import Project4 from "./components/project_desc/Project4_desc";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import amazon_like from "./static/amazon_like.png";
import developer_network from "./static/DeveloperNetworkFinal.png";
import photo_filter from "./static/photo_filter2.png";
import todo from "./static/todo_list2.png";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route exact path="/Project1" element={<Project1 photo={amazon_like} />}>
          </Route>
          <Route exact path="/Project2" element={<Project2 photo={developer_network} />}>
          </Route>
          <Route exact path="/Project3" element={<Project3 photo={photo_filter}/>}>
          </Route>
          <Route exact path="/Project4" element={<Project4 photo={todo}/>}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
