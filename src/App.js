import React, { useEffect } from "react";

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
  return <div className="App"></div>;
}

export default App;
