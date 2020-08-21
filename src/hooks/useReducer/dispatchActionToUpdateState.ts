import { CodeSnippet } from "../../lib/types";

export const dispatchActionToUpdateState: CodeSnippet = {
  id: "useReducer_01",
  title: "Dispatch an action to update state",
  code: `import React, { useReducer } from "react";

const reducer = (_state, action) => {
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
    3: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    4: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    5: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    6: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    7: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    8: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    11: "useReducer accepts the reducer function and the initial value of state. It returns the current state and a dispatch function that can be used to dispatch an action that will trigger a change in state. ",
    12: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    13: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    14: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    17: "Render state value in component template.",
    18: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
  },
  fontSize: 11,
  link: "https://codesandbox.io/s/usereducer01-smp90",
};
