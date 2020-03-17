import React from "react";
import { FiLink } from "react-icons/fi";

export const useRefSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useRef</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code>{" "}
          <code className="code-summary__signature--property">ref</code> ={" "}
          <code className="code-summary__signature--function">useRef</code>(
          <code className="code-summary__signature--argument">value</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Returns a mutable object that persists for the life of the component.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#useref"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useRef
          </a>
        </div>
      </div>
    </>
  );
};
