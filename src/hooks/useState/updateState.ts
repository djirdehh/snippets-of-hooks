import { CodeSnippet } from "../../lib/types";

export const updateState: CodeSnippet = {
  id: "useState_03",
  title: "Update value of state variable",
  code: `import React, { useState } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState(
    "Spider-Man"
  );

  return (
    <div>
      <h2>{superhero}</h2>
      <button onClick={() => updateSuperhero(
        "Iron Man"
      )}>
        Update Superhero!
      </button>
    </div>
  );
};`,
  notes: {
    4: "Destruct state property and function that can be used to update state value from the useState Hook.",
    11: "Trigger function to update value of state variable.",
    12: "Trigger function to update value of state variable.",
    13: "Trigger function to update value of state variable.",
  },
  fontSize: 14,
  link: "https://codesandbox.io/s/usestate03-4s6q7",
};
