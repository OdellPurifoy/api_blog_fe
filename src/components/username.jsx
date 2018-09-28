import React, { Component } from "react";

class UserName extends Component {
  renderName() {
    const userUrl = "http://localhost:3000/users" + this.props.user.id;
    window.location.href = userUrl;
  }

  render() {
    return (
      <div>
        <table key={this.props.user.id} className="userTable">
          <tbody>
            <tr>
              <td>
                <h1>User</h1>
              </td>
              <td>
                <h3>{this.props.user.first_name}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserName;
