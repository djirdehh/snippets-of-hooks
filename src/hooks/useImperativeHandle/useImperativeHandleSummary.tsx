import React from "react";
import { FiLink } from "react-icons/fi";
import { TextPopover } from "components";

export const useImperativeHandleSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useImperativeHandle</h2>
        <code className="code-summary__signature">
          <h5 className="code-summary__section-title">Signature</h5>
          <code className="code-summary__signature--function">useImperativeHandle</code>(
          <code className="code-summary__signature--argument">ref</code>,
          <code className="code-summary__signature--argument">init</code>,
          <code className="code-summary__signature--argument">deps</code>);
        </code>
      </div>
      <div>
        <h5 className="code-summary__section-title">Description</h5>
        <blockquote className="code-summary__description">
          Customizes the instance value exposed to parent components using{" "}
          <TextPopover
            message={
              <>
                The mutable object returned by the useRef Hook that persists for the life
                of the component.
              </>
            }
          >
            ref
          </TextPopover>
          .
        </blockquote>
      </div>
      <div className="code-summary__links">
        <h5 className="code-summary__section-title">Useful links</h5>
        <div>
          <FiLink size={15} />{" "}
          <a
            href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs | Hooks API Reference - useImperativeHandle
          </a>
        </div>
      </div>
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            React in and of itself provides a declarative API. Very rarely will you find
            the need to imperatively handle code using refs with the{" "}
            <b>useImperativeHook</b>.
          </li>
        </ul>
      </div>
    </>
  );
};
