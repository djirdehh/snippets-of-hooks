import React from "react";
import { FiLink } from "react-icons/fi";
import { TextPopover } from "components";

export const useReducerSummary = () => {
  return (
    <>
      <div>
        <h2 className="code-summary__title">useReducer</h2>
        <code className="code-summary__signature code-summary__signature--usereducer">
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
          an action, and returns the new state with a{" "}
          <TextPopover
            message={
              <>
                Dispatch functions are functions that <i>dispatch</i> actions.
              </>
            }
          >
            dispatch
          </TextPopover>{" "}
          method used to trigger an{" "}
          <TextPopover
            message={
              <>
                Actions are objects that explain <i>what is to happen</i>. Actions when
                triggered dictate the state change that is to be made and they always
                contain a type (i.e. label) and may contain a payload (i.e. data).
              </>
            }
          >
            action
          </TextPopover>{" "}
          for further state changes.
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
      <div className="code-summary__tips">
        <h5 className="code-summary__section-title">Tips</h5>
        <ul>
          <li>
            The <b>useReducer</b> Hook behaves very similar to the{" "}
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
              Redux
            </a>{" "}
            state management solution.
          </li>
          <li>
            The <b>useReducer</b> Hook comes with more boilerplate than the{" "}
            <b>useState</b> Hook but allows for more explicitly defined state changes.
          </li>
        </ul>
      </div>
    </>
  );
};
