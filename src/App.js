import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import Home from "./components/HomeComponent/HomeComponent";
import Header from "./components/Header/Header";
import ShowDetails from "./components/HomeComponent/ShowDetails/ShowDetails";

import tvShowsReducer from "./store/reducers/tvShowsReducer";
import showDetailsReducer from "./store/reducers/showDetailsReducer";

function App() {
  const store = createStore(
    combineReducers({
      allShows: tvShowsReducer,
      showDetails: showDetailsReducer
    }),
    applyMiddleware(thunk)
  );

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show/:id" component={ShowDetails} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
