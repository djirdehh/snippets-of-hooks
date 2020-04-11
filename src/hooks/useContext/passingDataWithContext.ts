import { CodeSnippet } from "../../lib/types";

export const passingDataWithContext: CodeSnippet = {
  id: "useContext_01",
  title: "Passing data between components with Context",
  code: `import React, { useState, useContext, createContext } from "react";

const SuperheroContext = createContext();

const ChildComponent = () => {
  const value = useContext(SuperheroContext);
  return <div>{value} is the best Marvel Superhero.</div>;
};

const ParentComponent = () => {
  const [superhero] = useState("Spider-Man");

  return (
    <SuperheroContext.Provider value={superhero}>
      <ChildComponent />
    </SuperheroContext.Provider>
  );
};`,
  notes: {
    "3": "create the Context object",
    "6": "use the useContext Hook to retrieve the current context value",
    "14":
      "wrap the child component with the Context provider to have the child subscribe to context changes. Here we also specify the initial Context value.",
    "16":
      "wrap the child component with the Context provider to have the child subscribe to context changes."
  },
  fontSize: 13,
  link: "https://codesandbox.io/s/usecontext-ycnup"
};
