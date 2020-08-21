import { CodeSnippet } from "../../lib/types";

export const effectOnFirstRender: CodeSnippet = {
  id: "useLayoutEffect_02",
  title: "Run effect only on first render",
  code: `import React, { useState, useLayoutEffect } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  useLayoutEffect(() => {
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
  link: "https://codesandbox.io/s/uselayouteffect02-r68l9",
};
