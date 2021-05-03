import React from "react";
import About from "./About";
import Cats from "./Cats";
import Nav from "./Nav";
import Quotes from "./Quotes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HarryPotter from "./HarryPotter";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cats" component={Cats} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/potter" component={HarryPotter} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home Page</h1>;
};
