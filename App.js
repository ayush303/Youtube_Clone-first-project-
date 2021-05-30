import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar.js';
import RecommendedVideo from './RecommendedVideos.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage.js";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>

      </Router>

      
      
      {/* RecommendedVideos */}
    </div>
  );
}

export default App;
