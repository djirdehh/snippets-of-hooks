import React from "react";
import { FiLink } from "react-icons/fi";

export const useMemoSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useMemo</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code>{" "}
          <code className="code-summary__signature--property">memoizedResult</code> ={" "}
          <code className="code-summary__signature--function">useMemo</code>(
          <code className="code-summary__signature--argument">function</code>,
          <code className="code-summary__signature--argument">deps</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Receives a function to create a value and an array of dependencies. Returns a
          memoized value that is recomputed only when a specified dependency has changed.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usememo"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useMemo
          </a>
        </div>
      </div>
    </>
  );
};
