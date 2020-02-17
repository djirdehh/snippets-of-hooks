import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeSample } from "../../lib/types";
import { FiInfo } from "react-icons/fi";

import "./styles/CodeSnippet.css";

interface Props {
  codeSample: CodeSample;
}

export const CodeSnippet = ({ codeSample }: Props) => {
  // const [lineNumberHover, setLineNumberHover] = useState<number | null>(null);
  const [showPrompts, setShowPrompts] = useState(false);
  const [messagePrompt, setMessagePrompt] = useState("");

  const customStyle = {
    margin: "0 0",
    borderRadius: "0"
  };

  const messagePromptSection =
    showPrompts && messagePrompt ? (
      <div className="code-snippet__message-prompt">
        <FiInfo color="#FFF" size={18} /> <span>{messagePrompt}</span>
      </div>
    ) : null;

  return (
    <div id="code-snippet">
      <button onClick={() => setShowPrompts(!showPrompts)}>Toggle prompts</button>
      <SyntaxHighlighter
        language="javascript"
        style={okaidia}
        customStyle={customStyle}
        wrapLines={true}
        lineProps={lineNumber => ({
          style: {
            display: "block",
            padding: "5px 10px",
            cursor:
              showPrompts && lineNumber.toString() in codeSample.notes ? "pointer" : "",
            backgroundColor:
              showPrompts && lineNumber.toString() in codeSample.notes ? "#3e4038" : ""
          },
          onClick() {
            setMessagePrompt(codeSample.notes[lineNumber]);
          }
        })}
      >
        {codeSample.snippet}
      </SyntaxHighlighter>
      <div>{messagePromptSection}</div>
    </div>
  );
};
