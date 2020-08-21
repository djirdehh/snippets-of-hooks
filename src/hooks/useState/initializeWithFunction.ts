import { CodeSnippet } from "../../lib/types";

export const initializeWithFunction: CodeSnippet = {
  id: "useState_02",
  title: "Initialize state variable with function",
  code: `import React, { useState } from "react";

const FunctionComponent = () => {
  const [superhero] = useState(() => "Spider-Man");

  return (
    <div>
      <h2>{superhero}</h2>
    </div>
  );
};`,
  notes: {
    4: "Initialize state variable with  a function.",
    8: "Render state value in component template.",
  },
  link: "https://codesandbox.io/s/usestate02-tuyej",
};
