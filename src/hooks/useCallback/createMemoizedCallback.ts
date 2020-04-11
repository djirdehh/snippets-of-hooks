import { CodeSnippet } from "../../lib/types";

export const createMemoizedCallback: CodeSnippet = {
  id: "useCallback_01",
  title: "Create a memoized callback function",
  code: `import React, { useState, useCallback } from "react";

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useState("Spider-Man");

  const setSuperhero = useCallback(newSuperhero => {
    updateSuperhero(newSuperhero);
  }, []);

  return (
    <div>
      <h2>{superhero}</h2>
      <button
        onClick={() => setSuperhero("Iron Man")}
      >
        Update Superhero!
      </button>
    </div>
  );
};`,
  notes: {
    "6":
      "create a memoized callback function that doesn't change until value of a dependency changes",
    "7":
      "create a memoized callback function that doesn't change until value of a dependency changes",
    "8":
      "create a memoized callback function that doesn't change until value of a dependency changes"
  },
  fontSize: 13,
  link: "https://codesandbox.io/s/usecallback-o0djb"
};
