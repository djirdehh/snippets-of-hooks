import React, { useState } from "react";
import Select from "react-select";
import classNames from "classnames";
import { FaTwitter } from "react-icons/fa";
import { CodeMessagePrompt, GithubCorner, Logo } from "./components";
import { CodeSnippet, CodeSummary } from "./sections";
import {
  useStateHook,
  useEffectHook,
  useContextHook,
  useReducerHook,
  useCallbackHook,
  useMemoHook,
  useRefHook,
  useLayoutEffectHook,
  useDebugValueHook,
  useImperativeHandleHook,
} from "./hooks";

import "./styles/App.css";

const listOfHooks = [
  useStateHook,
  useEffectHook,
  useContextHook,
  useReducerHook,
  useCallbackHook,
  useMemoHook,
  useRefHook,
  useLayoutEffectHook,
  useDebugValueHook,
  useImperativeHandleHook,
];

export const App = () => {
  const [currentCodeSummary, setCurrentCodeSummary] = useState<React.ReactNode>(
    useStateHook.summary
  );
  const [currentCodePDF, setCurrentCodePDF] = useState(useStateHook.pdf);
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(useStateHook.snippets[0]);
  const [listOfCodeSnippets, setListOfCodeSnippets] = useState(useStateHook.snippets);

  const [messagePrompt, setMessagePrompt] = useState("");
  const [lineNumberPrompt, setLineNumberPrompt] = useState<number | null>(null);
  const [showCodePrompts, setShowCodePrompts] = useState(false);

  const snippetDropdownOptions = listOfCodeSnippets.map((codeSnippet) => {
    return { value: codeSnippet.id, label: codeSnippet.title };
  });

  const hookDropdownOptions = [
    { value: "useState", label: "useState" },
    { value: "useEffect", label: "useEffect" },
    { value: "useContext", label: "useContext" },
    { value: "useReducer", label: "useReducer" },
    { value: "useCallback", label: "useCallback" },
    { value: "useMemo", label: "useMemo" },
    { value: "useRef", label: "useRef" },
    { value: "useLayoutEffect", label: "useLayoutEffect" },
    { value: "useDebugValue", label: "useDebugValue" },
    { value: "useImperativeHandle", label: "useImperativeHandle" },
  ];

  const [currentSnippetDropdownOption, setCurrentSnippetDropdownOption] = useState(
    snippetDropdownOptions[0]
  );
  const [currentHookDropdownOption, setCurrentHookDropdownOption] = useState(
    hookDropdownOptions[0]
  );

  const snippetSelectDropdown = (
    <Select
      value={currentSnippetDropdownOption}
      options={snippetDropdownOptions}
      menuPlacement="auto"
      onChange={(selectedOption: any) => {
        const selectedCodeSnippet = listOfCodeSnippets.find(
          (codeSnippet) => codeSnippet.id === selectedOption.value
        );

        if (selectedCodeSnippet) {
          setCurrentCodeSnippet(selectedCodeSnippet);
          setCurrentSnippetDropdownOption(selectedOption);
        }
      }}
    />
  );

  const hookSelectDropdown = (
    <Select
      value={currentHookDropdownOption}
      options={hookDropdownOptions}
      menuPlacement="top"
      onChange={(selectedOption: any) => {
        const selectedHook = listOfHooks.find((hook) => hook.id === selectedOption.value);

        if (selectedHook) {
          setCurrentCodeSummary(selectedHook.summary);
          setCurrentCodePDF(selectedHook.pdf);
          setCurrentCodeSnippet(selectedHook.snippets[0]);
          setListOfCodeSnippets(selectedHook.snippets);
          setCurrentSnippetDropdownOption({
            value: selectedHook.snippets[0].id,
            label: selectedHook.snippets[0].title,
          });
          setCurrentHookDropdownOption(selectedOption);
        }
      }}
    />
  );

  const messagePromptSection = showCodePrompts ? (
    <CodeMessagePrompt
      lineNumberPrompt={lineNumberPrompt}
      messagePrompt={messagePrompt}
    />
  ) : null;

  return (
    <div id="app">
      <GithubCorner />
      <div
        className={classNames({
          "app__code-summary": true,
          "app__code-summary--blur": showCodePrompts,
        })}
      >
        <div className="app__code-summary-title">
          <Logo />
          <h2>Snippets of Hooks</h2>
        </div>
        {messagePromptSection}
        <CodeSummary
          currentCodeSummary={currentCodeSummary}
          currentCodePDF={currentCodePDF}
          dropdownElement={snippetSelectDropdown}
        />
        <a
          href="https://twitter.com/djirdehh"
          target="_blank"
          rel="noopener noreferrer"
          className="app__code-summary-footer-social"
        >
          <FaTwitter size={18} />
        </a>
        <div className="app__code-summary-footer">
          <div className="app__code-summary-footer-dropdown">{hookSelectDropdown}</div>
        </div>
      </div>
      <div className="app__code-snippet">
        <CodeSnippet
          codeSnippet={currentCodeSnippet}
          showCodePrompts={showCodePrompts}
          messagePrompt={messagePrompt}
          setShowCodePrompts={setShowCodePrompts}
          setMessagePrompt={setMessagePrompt}
          setLineNumberPrompt={setLineNumberPrompt}
        />
      </div>
    </div>
  );
};
