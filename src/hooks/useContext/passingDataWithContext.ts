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
    3: "Create the Context object.",
    6: "Use the useContext Hook to retrieve the current context value in the child component.",
    14: "Wrap the child component with the context provider to have the child subscribe to context changes. In the example here, we also specify the initial context value in the context provider.",
    16: "Wrap the child component with the context provider to have the child subscribe to context changes. In the example here, we also specify the initial context value in the context provider.",
  },
  fontSize: 13,
  link: "https://codesandbox.io/s/usecontext-ycnup",
};
