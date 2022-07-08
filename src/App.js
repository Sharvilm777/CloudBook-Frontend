import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import NoteState from "./Context/noteState";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
