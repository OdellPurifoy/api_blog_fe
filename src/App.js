import React, { Component } from "react";
import UserName from "./components/username";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  showUser() {
    const urlString = "http://localhost:3000/users";
    console.log("Data Successfully fetched");
    $.ajax({
      url: urlString
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" />
        </header>
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
