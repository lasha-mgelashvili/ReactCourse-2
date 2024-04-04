console.log("Script loaded.");

// Define your React component
const Form = () => {
  return (
    <form>
      <label>userEmail</label>
      <input placeholder="enter email" />

      <label>password</label>
      <input placeholder="enter password" />
    </form>
  );
};

// Render your component to the DOM
ReactDOM.render(<Form />, document.getElementById("root"));


