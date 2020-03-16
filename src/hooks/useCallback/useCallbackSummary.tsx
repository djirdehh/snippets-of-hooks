import React from "react";
import { FiLink } from "react-icons/fi";

export const useCallbackSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useCallback</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code>{" "}
          <code className="code-summary__signature--property">memoizedCallback</code> ={" "}
          <code className="code-summary__signature--function">useCallback</code>(
          <code className="code-summary__signature--argument">callback</code>,
          <code className="code-summary__signature--argument">deps</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Returns a memoized version of the callback being passed in.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#usecallback"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useCallback
          </a>
        </div>
      </div>
    </>
  );
};
