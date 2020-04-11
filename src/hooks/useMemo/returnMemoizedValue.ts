import { CodeSnippet } from "../../lib/types";

export const returnMemoizedValue: CodeSnippet = {
  id: "useMemo_01",
  title: "Return memoized value",
  code: `import React, { useMemo } from "react";

const FunctionComponent = () => {
  const superheroes = ["Spider-Man", "Iron Man"];
  const getRandomSuperhero = () =>
    superheros[
      Math.floor(Math.random() * superheros.length)
    ];

  const memoizedRandomSuperhero = useMemo(
    getRandomSuperhero,
    [superheros]
  );

  return (
    <h2>{memoizedRandomSuperhero}</h2>
  );
};`,
  notes: {
    "10":
      "Return a memoized value that won't be recomputed (i.e. getRandomSuperhero() function won't run) only until dependancy (i.e. superheroes) changes.",
    "11":
      "Return a memoized value that won't be recomputed (i.e. getRandomSuperhero() function won't run) only until dependancy (i.e. superheroes) changes.",
    "12":
      "Return a memoized value that won't be recomputed (i.e. getRandomSuperhero() function won't run) only until dependancy (i.e. superheroes) changes.",
    "13":
      "Return a memoized value that won't be recomputed (i.e. getRandomSuperhero() function won't run) only until dependancy (i.e. superheroes) changes."
  },
  fontSize: 13
};
