import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Router, RouteComponentProps } from "@reach/router";

// Creating new route component for TS types
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

function App() {
  return (
    <div className="App">
      <Router>
        <RouterPage pageComponent={<Home />} path="/" />
        <RouterPage pageComponent={<About />} path="/about" />
      </Router>
    </div>
  );
}

export default App;
