import { CodeSnippet } from "../../lib/types";

export const effectOnEveryRender: CodeSnippet = {
  id: "useEffect_01",
  title: "Run effect on every render",
  code: `import React, { useState, useEffect } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  useEffect(() => {
    console.log("run for every component render");
  });

  return (
    <div>
      <h2>{superhero}</h2>
      <button onClick={() => updateSuperhero(
        superhero === "Spider-Man" ? "Iron Man" : "Spider-Man"
      )}>
        Update Superhero!
      </button>
    </div>
  );
};`,
  notes: {
    "6": "Function passed into the Hook is the 'effect' that is to run on every render.",
    "7": "Function passed into the Hook is the 'effect' that is to run on every render.",
    "8": "Function passed into the Hook is the 'effect' that is to run on every render."
  },
  fontSize: 12,
  link: "https://codesandbox.io/s/useeffect01-tpbio"
};
