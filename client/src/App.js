import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar.js";
import Shows from "./components/Shows.js";
import FrontPage from "./components/FrontPage.js";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <AppNavbar />
          <BrowserRouter>
            <Route path="/home" component={FrontPage} />
            <Route path="/shows" component={Shows} />
          </BrowserRouter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
