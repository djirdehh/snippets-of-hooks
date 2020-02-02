import React from "react";
import { CodeSnippet, CodeSummary } from "./sections";

import "./styles/App.css";

export const App = () => {
  return (
    <div id="app">
      <div className="app__code-summary">
        <CodeSummary />
      </div>
      <div className="app__code-snippet">
        <CodeSnippet />
      </div>
    </div>
  );
};
