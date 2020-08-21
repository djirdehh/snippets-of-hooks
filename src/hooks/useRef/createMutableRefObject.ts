import { CodeSnippet } from "../../lib/types";

export const createMutableRefObject: CodeSnippet = {
  id: "useRef_01",
  title: "Create mutable reference object",
  code: `import React, { useRef } from "react";

const FunctionComponent = () => {
  const ref = useRef("Spider-Man");

  return <h2>{ref.current}</h2>;
};`,
  notes: {
    4: "Create a mutable reference object that remains persistent through the lifetime of the component.",
    6: "Access the initial reference value with the `.current` property of the ref object.",
  },
  link: "https://codesandbox.io/s/useref-s8rlj",
};
