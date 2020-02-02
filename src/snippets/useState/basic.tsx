export const basic = `import React, { useState } from "react";

export const FunctionComponent = () => {
  const [superhero] = useState("Spider-Man");

  return (
    <div>
      <h2>{superhero}</h2>
    </div>
  );
};`;
