import { CodeSnippet } from "../../lib/types";

export const initialize: CodeSnippet = {
  id: "useState_01",
  title: "Initialize and use state variable",
  code: `import React, { useState } from "react";

  export const FunctionComponent = () => {
    const [superhero] = useState("Spider-Man");
  
    return (
      <div>
        <h2>{superhero}</h2>
      </div>
    );
  };`,
  notes: {
    "1": "import the useState Hook",
    "4": "initialize state variable",
    "8": "render state variable"
  }
};
