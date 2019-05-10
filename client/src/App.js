import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar.js";
import FutureShows from "./components/FutureShows.js";
import Video from "./components/Video.js";
import Contact from "./components/Contact.js";
import ShowCounter from "./components/ShowCounter.js";
import FrontPage from "./components/FrontPage.js";
import Footer from "./components/Footer";

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
        </header>
        <BrowserRouter>
          <Route path={/^\/$/} component={FrontPage} />
          <Route path="/shows" component={FutureShows} />
          <Route path="/contact" component={Contact} />
          <Route path="/video" component={Video} />
          <Route path="/showCounter" component={ShowCounter} />
        </BrowserRouter>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
