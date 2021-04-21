import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/about">
            <Navbar />
          </Route>
          <Route path="/projects">
            <Navbar />
          </Route>
          <Route path="/contact">
            <Navbar />
          </Route>
          <Route path="/blog">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
