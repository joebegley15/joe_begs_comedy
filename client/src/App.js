import React from "react";
import AppNavbar from "./components/AppNavbar.js";
import Shows from "./components/Shows.js";

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
          <Shows />
        </header>
      </div>
    </Provider>
  );
}

export default App;
