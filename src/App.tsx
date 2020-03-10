import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
        <RouterPage pageComponent={<Login />} path="/login" />
      </Router>
    </div>
  );
}

export default App;
