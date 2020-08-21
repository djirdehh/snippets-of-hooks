import { CodeSnippet } from "../../lib/types";

export const lazyInitializationOfState: CodeSnippet = {
  id: "useReducer_02",
  title: "Lazy initialization of state",
  code: `import React, { useReducer } from "react";

const reducer = (_state, action) => {
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
    3: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    4: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    5: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    6: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    7: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    8: "Create the reducer function that returns the updated state based on the type of action conducted. In this example, a single action is declared and the value of the state returned is derived from the payload of the action.",
    10: "Here we create an initialization function that is accepted as the third optional parameter of the useReducer Hook. The initialization function helps initialize the state object lazily.",
    13: "Here we create an initialization function that is accepted as the third optional parameter of the useReducer Hook. The initialization function helps initialize the state object lazily.",
    14: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    15: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    16: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
    19: "Render state value in component template.",
    20: "Here we have a component function that triggers the dispatch of an action and specifies the action type being dispatched and the value of the action payload.",
  },
  fontSize: 11,
  link: "https://codesandbox.io/s/usereducer02-68v8y",
};
