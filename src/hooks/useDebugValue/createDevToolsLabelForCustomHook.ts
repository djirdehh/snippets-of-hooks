import { CodeSnippet } from "../../lib/types";

export const createDevToolsLabelForCustomHook: CodeSnippet = {
  id: "useDebugValue_01",
  title: "Create DevTools label for custom Hook",
  code: `import React, {
    useState,
    useDebugValue
  } from "react";

export const SuperheroHook = () => {
  const [superhero] = useState("Spider-Man");

  useDebugValue("Peter Parker");

  return superhero;
};`,
  notes: {
    "7":
      "Custom Hooks are functions that call other Hooks. In this custom Hook, we simply initialize and return a static state variable directly.",
    "9": "Use the useDebugValue Hook to display a label for this Hook in React DevTools",
    "11":
      "Custom Hooks are functions that call other Hooks. In this custom Hook, we simply initialize and return a static state variable directly."
  }
};
