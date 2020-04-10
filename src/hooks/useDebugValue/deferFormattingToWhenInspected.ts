import { CodeSnippet } from "../../lib/types";

export const deferFormattingToWhenInspected: CodeSnippet = {
  id: "useDebugValue_02",
  title: "Defer formatting to when custom Hook is inspected",
  code: `import React, {
    useState,
    useDebugValue
  } from "react";

export const SuperheroHook = () => {
  const [superhero] = useState("Spider-Man");

  useDebugValue(superhero, superhero => {
    return superhero + ' and Iron Man'
  });

  return superhero;
};`,
  notes: {
    "7":
      "Custom Hooks are functions that call other Hooks. In this custom Hook, we simply initialize and return a static state variable directly.",
    "9":
      "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function is only run when the debug value is to be seen.",
    "10":
      "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function is only run when the debug value is to be seen.",
    "11":
      "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function is only run when the debug value is to be seen.",
    "13":
      "Custom Hooks are functions that call other Hooks. In this custom Hook, we simply initialize and return a static state variable directly."
  }
};
