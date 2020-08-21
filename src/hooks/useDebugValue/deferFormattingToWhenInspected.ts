import { CodeSnippet } from "../../lib/types";

export const deferFormattingToWhenInspected: CodeSnippet = {
  id: "useDebugValue_02",
  title: "Defer formatting to when custom Hook is inspected",
  code: `import React, { useState, useDebugValue } from "react";

  const useSuperhero = value => {
    const [superhero, updateSuperhero] = useState(value);
    useDebugValue(superhero, superhero => {
      return superhero === "Spider-Man"
        ? "P. Parker"
        : "T. Stark";
    });
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
    5: "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function to create the label is only run when the debug value is to be seen.",
    6: "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function to create the label is only run when the debug value is to be seen.",
    7: "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function to create the label is only run when the debug value is to be seen.",
    8: "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function to create the label is only run when the debug value is to be seen.",
    9: "useDebugValue accepts an optional formatting function as the second parameter which is called only when the custom Hook is inspected. This is helpful in ensuring an expensive formatting function to create the label is only run when the debug value is to be seen.",
    10: "Custom Hooks are functions that call other Hooks. In this custom Hook, we initialize and return a state value and the accompanying state update function.",
  },
  fontSize: 11,
  link: "https://codesandbox.io/s/usedebugvalue02-f3zdt",
};
