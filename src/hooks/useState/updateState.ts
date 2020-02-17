import { CodeSnippet } from "../../lib/types";

export const updateState: CodeSnippet = {
  id: "useState_03",
  title: "Update value of state variable",
  code: `import React, { useState } from "react";

  export const FunctionComponent = () => {
    const [superhero, updateSuperhero] = useState(
      "Spider-Man"
    );
  
    return (
      <div>
        <h2>{superhero}</h2>
        <button onClick={() => updateSuperhero("Iron Man")}>
          Update Superhero!
        </button>
      </div>
    );
  };`,
  notes: {
    "4": "destruct function to update state variable",
    "11": "trigger function to update state variable"
  }
};
