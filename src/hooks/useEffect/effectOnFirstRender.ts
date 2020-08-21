import { CodeSnippet } from "../../lib/types";

export const effectOnFirstRender: CodeSnippet = {
  id: "useEffect_02",
  title: "Run effect only on first render",
  code: `import React, { useState, useEffect } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  useEffect(() => {
    console.log("run only for first render");
  }, []);

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
    8: "Passing an empty array as the dependencies list tells React to never re-run the effect. As a result, this effect will run only on first component render.",
  },
  fontSize: 13,
  link: "https://codesandbox.io/s/useeffect02-ed1zc",
};
