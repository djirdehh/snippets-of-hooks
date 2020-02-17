import React from "react";
import { FiLink } from "react-icons/fi";

export const useEffectSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useEffect</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--const">const</code> [
          <code className="code-summary__signature--property">state</code>,{" "}
          <code className="code-summary__signature--property">setState</code>] ={" "}
          <code className="code-summary__signature--function">useState</code>(
          <code className="code-summary__signature--argument">initialState</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Helps allow us to add state to functional components. Returns a stateful value
          and a function to update it.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-state.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Using the State Hook
          </a>
        </div>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-state.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hooks API Reference | useState
          </a>
        </div>
      </div>
    </>
  );
};
