import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import Home from "./components/HomeComponent/HomeComponent";
import "./App.css";

import tvShowsReducer from "./components/HomeComponent/tvShowsReducer";

function App() {
  const store = createStore(
    combineReducers({
      allShows: tvShowsReducer
    }),
    applyMiddleware(thunk)
  );

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
