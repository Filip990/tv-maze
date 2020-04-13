import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import CastMember from "./pages/CastMember/CastMember";
import SeasonsList from "./pages/SeasonsList/SeasonsList";
import EpisodesList from "./pages/EpisodesList/EpisodesList";

import tvShowsReducer from "./pages/Home/store/reducers/tvShowsReducer";
import showDetailsReducer from "./pages/ShowDetails/store/reducers/showDetailsReducer";

function App() {
  const store = createStore(
    combineReducers({
      allShows: tvShowsReducer,
      showDetails: showDetailsReducer,
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
            <Route path="/person/:id" component={CastMember} />
            <Route path="/seasons/:id" component={SeasonsList} />
            <Route path="/episodes/:id" component={EpisodesList} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
