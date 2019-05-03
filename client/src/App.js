import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar.js";
import Shows from "./components/Shows.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
        <Shows />
      </header>
    </div>
  );
}

export default App;
