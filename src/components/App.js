import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import React from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

const Home = () => {
  return <div>Welcome to my website!</div>;
};
const About = () => {
  return <div>This is a sample React Router program.</div>;
};

const Navigation = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
