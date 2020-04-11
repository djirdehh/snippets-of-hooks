import { CodeSnippet } from "../../lib/types";

export const updateStateWithPreviousState: CodeSnippet = {
  id: "useState_04",
  title: "Update value of state variable with previous state value",
  code: `import React, { useState } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState(
    "Spider-Man"
  );

  return (
    <div>
      <h2>{superhero}</h2>
      <button onClick={() => updateSuperhero(
        (superhero) => superhero + ' and Iron Man'
      )}>
        Update Superhero!
      </button>
    </div>
  );
};`,
  notes: {
    "11":
      "Use the functional update form of the update state function. Function passed in has access to previous state value.",
    "12":
      "Use the functional update form of the update state function. Function passed in has access to previous state value.",
    "13":
      "Use the functional update form of the update state function. Function passed in has access to previous state value."
  },
  fontSize: 14,
  link: "https://codesandbox.io/s/usestate04-lk0yk"
};
