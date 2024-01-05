// UserInfo.js
import React from "react";
import user from "../../../image/icon/user.png";

const UserInfo = ({ loggedInUser }) => {
  const username = loggedInUser ? loggedInUser.username : "Guest";

  return (
    <div className="user-info-container">
      <img src={user} className="user-information-image" alt="User" />
      <span className="user-information-name">{username}</span>
    </div>
  );
};

export default UserInfo;
