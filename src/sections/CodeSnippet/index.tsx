import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiExternalLink } from "react-icons/fi";

import { CodeSnippet as ICodeSnippet } from "../../lib/types";

import "./styles/CodeSnippet.css";

interface Props {
  codeSnippet: ICodeSnippet;
  showCodePrompts: boolean;
  messagePrompt: string;
  setShowCodePrompts: (value: boolean) => void;
  setMessagePrompt: (value: string) => void;
  setLineNumberPrompt: (value: number | null) => void;
}

export const CodeSnippet = ({
  codeSnippet,
  showCodePrompts,
  messagePrompt,
  setShowCodePrompts,
  setMessagePrompt,
  setLineNumberPrompt,
}: Props) => {
  useEffect(() => {
    setShowCodePrompts(false);
    setMessagePrompt("");
    setLineNumberPrompt(null);
  }, [codeSnippet, setShowCodePrompts, setMessagePrompt, setLineNumberPrompt]);

  const customStyle = {
    margin: "0 0",
    borderRadius: "0",
    backgroundColor: "#121212",
    fontSize: codeSnippet.fontSize ? codeSnippet.fontSize : 16,
  };

  return (
    <div id="code-snippet">
      <div className="code-snippet__code">
        <SyntaxHighlighter
          language="javascript"
          style={okaidia}
          customStyle={customStyle}
          wrapLines
          lineProps={(lineNumber) => ({
            style: {
              display: "block",
              padding: "5px 10px",
              opacity:
                showCodePrompts && !(lineNumber.toString() in codeSnippet.notes)
                  ? 0.4
                  : 1.0,
              cursor:
                showCodePrompts && lineNumber.toString() in codeSnippet.notes
                  ? "pointer"
                  : "",
              backgroundColor:
                showCodePrompts &&
                codeSnippet.notes[lineNumber.toString()] != null &&
                codeSnippet.notes[lineNumber.toString()] === messagePrompt
                  ? "#292d38"
                  : "",
              transition: "opacity .2s ease-in-out",
            },
            onClick() {
              setMessagePrompt(codeSnippet.notes[lineNumber]);
              setLineNumberPrompt(lineNumber);
            },
          })}
        >
          {codeSnippet.code}
        </SyntaxHighlighter>
      </div>
      <div className="code-snippet__footer">
        <div
          className="code-snippet__footer-item code-snippet__footer-item--first"
          onClick={() => setShowCodePrompts(!showCodePrompts)}
        >
          <input
            type="checkbox"
            checked={showCodePrompts}
            onChange={() => setShowCodePrompts(!showCodePrompts)}
          />
          Toggle prompts
        </div>

        <div className="code-snippet__footer-item code-snippet__footer-item--large">
          <a href={codeSnippet.link} target="_blank" rel="noopener noreferrer">
            <FiExternalLink />
            Open in CodeSandbox
          </a>
        </div>
      </div>
    </div>
  );
};
