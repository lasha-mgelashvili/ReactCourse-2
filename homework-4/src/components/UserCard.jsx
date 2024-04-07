import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt="User" />
      <div className="user-details">
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Location:</strong> {user.location.city},{" "}
          {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
