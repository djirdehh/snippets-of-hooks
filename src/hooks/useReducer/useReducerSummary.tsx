import React from "react";
import { FiLink } from "react-icons/fi";

export const useReducerSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useReducer</h2>
        <code className="code-summary__signature" style={{ fontSize: "16px" }}>
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code> [
          <code className="code-summary__signature--property">state</code>,
          <code className="code-summary__signature--property">dispatch</code>] ={" "}
          <code className="code-summary__signature--function">useReducer</code>(
          <code className="code-summary__signature--argument">reducer</code>,
          <code className="code-summary__signature--argument">initialArg</code>,
          <code className="code-summary__signature--argument">initializer</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          An alternative to useState for managing complex state in components. The
          useReducer Hook takes a reducer() function that receives the current state and
          an action, and returns the new state with a dispatch method used to trigger an
          action for further state changes.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usereducer"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useReducer
          </a>
        </div>
      </div>
    </>
  );
};
