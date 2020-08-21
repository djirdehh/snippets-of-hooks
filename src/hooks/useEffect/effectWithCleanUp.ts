import { CodeSnippet } from "../../lib/types";

export const effectWithCleanUp: CodeSnippet = {
  id: "useEffect_03",
  title: "Run effect with clean-up",
  code: `import React, { useState, useEffect } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  useEffect(() => {
    console.log("run for every component render");
    return () => {
      console.log("run before next effect and component un-mount")
    }
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
    8: "Function returned from the effect callback is known as the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    9: "Function returned from the effect callback is known as the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
    10: "Function returned from the effect callback is known as the effect clean-up. The clean-up runs before the effect of the next render is to run or when the component un-mounts.",
  },
  fontSize: 11,
  link: "https://codesandbox.io/s/useeffect03-qd9pu",
};
