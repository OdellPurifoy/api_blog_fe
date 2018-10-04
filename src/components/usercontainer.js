import React, { Component } from "react";
import axios from "axios";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="User-container">
        {this.state.users.map(user => {
          return (
            <div className="single-user" key={user.id}>
              <h4>{user.first_name}</h4>
              <h5>{user.last_name}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserContainer;
