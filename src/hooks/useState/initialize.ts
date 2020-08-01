import { CodeSnippet } from "../../lib/types";

export const initialize: CodeSnippet = {
  id: "useState_01",
  title: "Initialize and use state variable",
  code: `import React, { useState } from "react";

const FunctionComponent = () => {
  const [superhero] = useState("Spider-Man");

  return (
    <div>
      <h2>{superhero}</h2>
    </div>
  );
};`,
  notes: {
    "1": "Import the useState Hook.",
    "4": "Initialize state variable.",
    "8": "Render state variable."
  },
  link: "https://codesandbox.io/s/usestate01-mj3qf"
};
