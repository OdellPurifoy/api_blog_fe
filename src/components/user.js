import React from "react";

const User = ({ user }) => (
  <div className="single-user" key={user.id}>
    <h1>{user.first_name}</h1>
    <h2>{user.last_name}</h2>
  </div>
);

export default User;
