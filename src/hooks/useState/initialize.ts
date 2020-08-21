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
    4: "Initialize state variable with the useState Hook.",
    8: "Render state value in component template.",
  },
  link: "https://codesandbox.io/s/usestate01-mj3qf",
};
