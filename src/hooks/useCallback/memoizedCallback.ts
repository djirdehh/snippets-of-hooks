import { CodeSnippet } from "../../lib/types";

export const memoizedCallback: CodeSnippet = {
  id: "useCallback_01",
  title: "Create a memoized callback function",
  code: `import React, { useCallback } from "react";

export const FunctionComponent = () => {
  const memoizedCallback = useCallback(() => {
    console.log("callback function has run");
  }, [dependency]);
};`,
  notes: {
    "4":
      "memoized callback function is created and doesn't change until value of dependency changes",
    "5":
      "memoized callback function is created and doesn't change until value of dependency changes",
    "6":
      "memoized callback function is created and doesn't change until value of dependency changes"
  }
};
