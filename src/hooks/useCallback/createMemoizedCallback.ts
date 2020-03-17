import { CodeSnippet } from "../../lib/types";

export const createMemoizedCallback: CodeSnippet = {
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
      "create a memoized callback function that doesn't change until value of dependency changes",
    "5":
      "create a memoized callback function that doesn't change until value of dependency changes",
    "6":
      "create a memoized callback function that doesn't change until value of dependency changes"
  }
};
