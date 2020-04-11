import { CodeSnippet } from "../../lib/types";

export const lazyInitializationOfState: CodeSnippet = {
  id: "useReducer_02",
  title: "Lazy initialization of state",
  code: `import React, { useReducer } from "react";

function reducer(_state, action) {
  switch (action.type) {
    case "UPDATE_SUPERHERO":
      return { superhero: action.payload };
  }
}

const init = superhero => ({ superhero });

const FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, "Spider-Man", init);
  const updateSuperhero = () => dispatch(
    { type: "UPDATE_SUPERHERO", payload: "Iron Man"}
  );
  return (
    <div>
      {state.superhero}
      <button onClick={updateSuperhero}>Update Superhero</button>
    </div>
  );
};`,
  notes: {
    "3":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "4":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "5":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "6":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "7":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "8":
      "Reducer function that updates the superhero state variable with the action payload when the UPDATE_SUPERHERO action is triggered.",
    "10":
      "Initialization function passed in the useReducer Hook to initialize the state object lazily.",
    "13":
      "Destructuring state variable and dispatch function from useReducer. When executing useReducer, reducer function, initial state value, and initialization function is passed in.",
    "14":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "15":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "16":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "19": "Render state value",
    "20": "Trigger the dispatch on button click"
  },
  fontSize: 11,
  link: "https://codesandbox.io/s/usereducer02-68v8y"
};
