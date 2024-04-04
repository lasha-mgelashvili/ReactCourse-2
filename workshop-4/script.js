import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${user.email} your password is ${user.password}`);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <label>email</label>
      <input
        onCange={(e) => {
          setUser({ email: e.target.value });
        }}
        placeholder="enter email"
      />

      <label>password</label>
      <input
        onCange={(e) => {
          setUser({ password: e.target.value });
        }}
        placeholder="enter password"
      />
      <button className="button" type="submit">
        submit
      </button>
    </form>
  );
};

// Render your component to the DOM
ReactDOM.render(<Form />, document.getElementById("root"));
