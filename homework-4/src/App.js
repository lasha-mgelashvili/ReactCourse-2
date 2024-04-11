import React, { useState } from "react";
import "./App.css"; // assuming you have a separate CSS file for styling
import UserCard from "./components/UserCard";
import { users } from "../src/constants/index";
import Form from "./components/Form";

const App = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const isButtonDisabled =
    user.email === "digitalAcademy@gmail.com" &&
    user.password === "ilovereact123"
      ? false
      : true;

  const handleButtonClick = () => {
    // Add any action you want to perform on button click
    console.log("Button clicked!");
  };

  return (
    <div className="App">
      <Form
        user={user}
        setUser={setUser}
        isButtonDisabled={isButtonDisabled}
        setIsButtonClicked={setIsButtonClicked}
        handleButtonClick={handleButtonClick}
      />
      {isButtonClicked && (
        <div className="user-list">
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
