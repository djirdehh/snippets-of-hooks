import { CodeSnippet } from "../../lib/types";

export const dispatchActionToUpdateState: CodeSnippet = {
  id: "useReducer_01",
  title: "Dispatch an action to update state",
  code: `import React, { useReducer } from "react";

function reducer(_state, action) {
  switch (action.type) {
    case "UPDATE_SUPERHERO":
      return { superhero: action.payload };
  }
}

const FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, { superhero: "Spider-Man" });
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
    "11":
      "Destructuring state variable and dispatch function from useReducer. When executing useReducer, reducer function and initial state object is passed in.",
    "12":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "13":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "14":
      "Creating function that runs the dispatch function and trigger the UPDATE_SUPERHERO action with the intended payload.",
    "17": "Render state value",
    "18": "Trigger the dispatch on button click"
  },
  fontSize: 11
};
