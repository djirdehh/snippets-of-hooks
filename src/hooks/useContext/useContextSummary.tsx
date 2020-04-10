import React from "react";
import { FiLink } from "react-icons/fi";

export const useContextSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useContext</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code>{" "}
          <code className="code-summary__signature--property">contextValue</code> ={" "}
          <code className="code-summary__signature--function">useContext</code>(
          <code className="code-summary__signature--argument">ContextObject</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Provides function components access to the context value for a context object.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Context
          </a>
        </div>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usecontext"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useContext
          </a>
        </div>
      </div>
    </>
  );
};
