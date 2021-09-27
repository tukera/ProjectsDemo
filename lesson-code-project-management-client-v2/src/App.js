import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>      
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectListPage} />
        <Route exact path="/projects/:id" component={ProjectDetailsPage} />
        <Route exact path="/projects/edit/:id" component={EditProjectPage} />           
      </Switch>
    </div>
  );
}

export default App;
