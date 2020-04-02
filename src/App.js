import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/HomeComponent/HomeComponent";

import "./App.css";

function App() {
  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const res = await fetch("http://api.tvmaze.com/shows");
        const data = await res.json();
        console.log(data);
      } catch (err) {}
    };

    fetchTvShows();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
