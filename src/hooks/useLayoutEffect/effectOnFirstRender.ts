import { CodeSnippet } from "../../lib/types";

export const effectOnFirstRender: CodeSnippet = {
  id: "useLayoutEffect_02",
  title: "Run effect only on first render",
  code: `import React, { useLayoutEffect } from "react";

export const FunctionComponent = () => {
  useLayoutEffect(() => {
    console.log("run only for first render");
  }, []);
};`,
  notes: {
    "6":
      "Passing an empty array as the dependencies list tells React to never re-run the effect. Effect will only run on first component render."
  }
};
