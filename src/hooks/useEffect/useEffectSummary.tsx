import React from "react";
import { FiLink } from "react-icons/fi";

export const useEffectSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useEffect</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--function">useEffect</code>(
          <code className="code-summary__signature--argument">effect</code>,
          <code className="code-summary__signature--argument">deps</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Helps perform side effects in our function components. Accepts the effect
          callback function we want to run (i.e. the effect itself) as the first argument
          and a dependencies array that can tell the Hook to skip applying the effect only
          until in certain conditions.
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-effect.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Using the Effect Hook
          </a>
        </div>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#useeffect"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useEffect
          </a>
        </div>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://overreacted.io/a-complete-guide-to-useeffect/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Overreacted | A Complete Guide to useEffect
          </a>
        </div>
      </div>
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            When specifying dependencies, be sure to specify all component values
            (props/state) being used in the effect as part of the dependencies array. This
            is to prevent bugs that can arise from the effect referencing values from
            previous renders.
          </li>
          <li>
            If you need to have an effect occur synchronously only when all DOM mutations
            are complete but before the user sees the update - use the{" "}
            <b>useLayoutEffect</b> Hook instead.
          </li>
        </ul>
      </div>
    </>
  );
};
