import React, { Component } from "react";
import UserContainer from "./components/usercontainer";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/navigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <div className="App">
          <header className="App-header">
            <h1 className="App-title" />
          </header>
          <UserContainer />
        </div>
      </div>
    );
  }
}

export default App;
