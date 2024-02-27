import { useId, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  // Provides the unique id to refer the elements (can be used for id selectors)
  const nameId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter the Name :
        <input
          type="text"
          placeholder="Enter your name"
          aria-describedby={nameId}
          onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        />
      </label>
      <p id={nameId}>Please dont add special characters</p>
      <label>
        Enter the Email :
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
