import { CodeSnippet } from "../../lib/types";

export const createDevToolsLabelForCustomHook: CodeSnippet = {
  id: "useDebugValue_01",
  title: "Create DevTools label for custom Hook",
  code: `import React, { useState, useDebugValue } from "react";

const useSuperhero = value => {
  const [superhero, updateSuperhero] = useState(value);
  useDebugValue(superhero === "Spider-Man" ? "P. Parker" : "T. Stark");
  return [superhero, updateSuperhero];
};

const FunctionComponent = () => {
  const [superhero, updateSuperhero] = useSuperhero("Spider-Man");
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
    3: "Custom Hooks are functions that call other Hooks. In this custom Hook, we initialize and return a state value and the accompanying state update function.",
    4: "Custom Hooks are functions that call other Hooks. In this custom Hook, we initialize and return a state value and the accompanying state update function.",
    5: "We use the useDebugValue Hook to display a label for this custom Hook in React DevTools.",
    6: "Custom Hooks are functions that call other Hooks. In this custom Hook, we initialize and return a state value and the accompanying state update function.",
    10: "When using the custom Hook in our function component, we're able to see the label in DevTools next to this Hook.",
  },
  fontSize: 12,
  link: "https://codesandbox.io/s/usedebugvalue01-qc4eh",
};
