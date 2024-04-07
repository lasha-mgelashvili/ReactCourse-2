import React from "react";

const Form = ({ user, setUser, isButtonDisabled, setIsButtonClicked, handleButtonClick}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    alert(`hello ${user.email} your password is ${user.password}`);
  };

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
      <button disabled={isButtonDisabled} onClick={handleButtonClick} className="button" type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
