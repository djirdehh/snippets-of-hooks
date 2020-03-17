import React from "react";
import { FiLink } from "react-icons/fi";

export const useDebugValueSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useDebugValue</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--function">useDebugValue</code>(
          <code className="code-summary__signature--argument">value</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Helps display a label in{" "}
          <a
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Devtools
          </a>{" "}
          for custom created hooks.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useDebugValue
          </a>
        </div>
      </div>
    </>
  );
};
