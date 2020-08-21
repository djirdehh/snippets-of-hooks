import { CodeSnippet } from "../../lib/types";

export const returnMemoizedValue: CodeSnippet = {
  id: "useMemo_01",
  title: "Return memoized value",
  code: `import React, { useMemo } from "react";

const FunctionComponent = () => {
  const superheroes = ["Spider-Man", "Iron Man"];
  const getRandomSuperhero = () =>
    superheroes[
      Math.floor(Math.random() * superheroes.length)
    ];

  const memoizedRandomSuperhero = useMemo(
    getRandomSuperhero,
    [superheroes]
  );

  return (
    <h2>{memoizedRandomSuperhero}</h2>
  );
};`,
  notes: {
    10: "Return a memoized value that won't be recomputed only until the dependancy changes.",
    11: "Return a memoized value that won't be recomputed only until the dependancy changes.",
    12: "Return a memoized value that won't be recomputed only until the dependancy changes.",
    13: "Return a memoized value that won't be recomputed only until the dependancy changes.",
  },
  fontSize: 13,
  link: "https://codesandbox.io/s/usememo01-grerg",
};
