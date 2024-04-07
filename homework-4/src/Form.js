import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    alert(`hello ${user.email} your password is ${user.password}`);
  };
  const isButtonDIsabled = user.email && user.password ? false : true;
  return (
    <form className="form" onSubmit={submitHandler}>
      <label htmlFor="email">email</label>
      <input
        name="email"
        value={user.email}
        onChange={(e) => {
          setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }}
        placeholder="enter email"
      />

      <label htmlFor="password">password</label>
      <input
        name="password"
        value={user.password}
        onChange={(e) => {
          setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }));
        }}
        placeholder="enter password"
      />
      <button disabled={isButtonDIsabled} className="button" type="submit">
        submit
      </button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
