import { CodeSnippet } from "../../lib/types";

export const effectWithDependency: CodeSnippet = {
  id: "useLayoutEffect_04",
  title: "Run effect on first render and re-run when dependency changes",
  code: `import React, { useState, useLayoutEffect } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  useLayoutEffect(() => {
    console.log(\`run for first render and when 'superhero' changes\`);
  }, [superhero]);

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
    "8":
      "Passing a dependency in the dependencies list will tell React to re-run the effect every time the dependency changes."
  },
  fontSize: 12,
  link: "https://codesandbox.io/s/uselayouteffect04-2s064"
};
