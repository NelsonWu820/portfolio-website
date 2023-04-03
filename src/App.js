import HomePage from "./HomePage";
import Project1_desc from "./components/project_desc/Project1_desc";
import Project2_desc from "./components/project_desc/Project2_desc";
import Project3_desc from "./components/project_desc/Project3_desc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>}>
          </Route>
          <Route exact path="/Todo_List" element={<Project1_desc/>}>
          </Route>
          <Route exact path="/Project2" element={<Project2_desc/>}>
          </Route>
          <Route exact path="/Project3" element={<Project3_desc/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
