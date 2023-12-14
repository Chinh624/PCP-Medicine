// UserInfo.js
import React from "react";
import user from "../../../../img-icon/user.png";

const UserInfo = ({ loggedInUser }) => {
  return (
    <div className="user-info-container">
      {loggedInUser ? (
        <>
          <img src={user} className="user-information-image" alt="User" />
          <span className="user-information-name">{loggedInUser.username}</span>
        </>
      ) : (
        <>
          <img src={user} className="user-information-image" alt="User" />
          <span className="user-information-name">Guest</span>
        </>
      )}
    </div>
  );
};

export default UserInfo;
