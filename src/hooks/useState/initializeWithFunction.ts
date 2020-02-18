import { CodeSnippet } from "../../lib/types";

export const initializeWithFunction: CodeSnippet = {
  id: "useState_02",
  title: "Initialize state variable with function",
  code: `import React, { useState } from "react";

export const FunctionComponent = () => {
  const [superhero] = useState(() => "Spider-Man");

  return (
    <div>
      <h2>{superhero}</h2>
    </div>
  );
};`,
  notes: {
    "1": "import the useState Hook",
    "4": "initialize state variable with function",
    "8": "render state variable"
  }
};
