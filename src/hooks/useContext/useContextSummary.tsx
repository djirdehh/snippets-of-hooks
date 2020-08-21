import React from "react";
import { FiLink } from "react-icons/fi";
import { TextPopover } from "../../components";

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
          Provides function components access to the{" "}
          <TextPopover
            message={
              <>
                <b>Context</b> provides a useful way to have data be passed down a
                component tree without having to resort to <i>prop-drilling</i> (i.e.
                manually passing props down along every child component).
              </>
            }
          >
            context
          </TextPopover>{" "}
          value for a context object.
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
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            <b>useContext</b> is a great Hook to use to help have data be passed down
            components without having to declare props in each and every component in the
            tree (which is often recognized as <i>prop-drilling</i>).
          </li>
          <li>
            If your React app needs to share some global context (e.g. login status, app
            theme information, etc.) in many different components, <b>useContext</b> is
            the preferred Hook to use to pass this data around.
          </li>
        </ul>
      </div>
    </>
  );
};
