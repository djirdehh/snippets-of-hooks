import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

import "./styles/CodeSnippet.css";

// to by dynamic
import { basic } from "../../snippets/useState";

export const CodeSnippet = () => {
  const customStyle = {
    margin: "0 0",
    borderRadius: "0"
  };

  return (
    <SyntaxHighlighter
      language="javascript"
      style={okaidia}
      customStyle={customStyle}
      wrapLines={true}
      lineProps={lineNumber => ({
        style: { display: "block", opacity: "pointer" },
        onClick() {
          console.log(`Line Number Clicked: ${lineNumber}`);
        }
      })}
    >
      {basic}
    </SyntaxHighlighter>
  );
};
