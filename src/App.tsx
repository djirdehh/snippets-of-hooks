import React, { useState } from "react";
import Select from "react-select";
import classNames from "classnames";
import { FaTwitterSquare, FaEnvelope } from "react-icons/fa";
import { CodeMessagePrompt, GithubCorner, ReactLogo } from "./components";
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
import { CodeSnippet as ICodeSnippet } from "./lib/types";
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

interface CurrentCodeSummaryInfo {
  id: string;
  summary: React.ReactNode;
  pdf: string;
  currentSnippet: ICodeSnippet;
  listOfSnippets: ICodeSnippet[];
}

export const App = () => {
  const hookID = sessionStorage.getItem("hookID");
  const codeSnippetID = sessionStorage.getItem("codeSnippetID");

  const hook = listOfHooks.find((hook) => hook.id === hookID);
  const hookToView = hook || useStateHook;

  const snippet = hookToView.snippets.find(
    (snippet) => snippet.id === codeSnippetID
  );
  const snippetToView = snippet || hookToView.snippets[0];

  const [currentCodeSummaryInfo, setCurrentCodeSummaryInfo] = useState<
    CurrentCodeSummaryInfo
  >({
    id: hookToView.id,
    summary: hookToView.summary(),
    pdf: hookToView.pdf,
    currentSnippet: snippetToView,
    listOfSnippets: hookToView.snippets,
  });

  const snippetDropdownOptions = currentCodeSummaryInfo.listOfSnippets.map(
    (codeSnippet) => {
      return { value: codeSnippet.id, label: codeSnippet.title };
    }
  );

  const snippetDropdownOptionSelected = codeSnippetID
    ? snippetDropdownOptions.find(
        (codeSnippet) => codeSnippet.value === codeSnippetID
      )
    : snippetDropdownOptions[0];

  const [messagePrompt, setMessagePrompt] = useState("");
  const [lineNumberPrompt, setLineNumberPrompt] = useState<number | null>(null);
  const [showCodePrompts, setShowCodePrompts] = useState(false);

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

  const [
    currentSnippetDropdownOption,
    setCurrentSnippetDropdownOption,
  ] = useState(snippetDropdownOptionSelected);
  const [currentHookDropdownOption, setCurrentHookDropdownOption] = useState(
    hookID ? { value: hookID, label: hookID } : hookDropdownOptions[0]
  );

  const snippetSelectDropdown = (
    <Select
      value={currentSnippetDropdownOption}
      options={snippetDropdownOptions}
      menuPlacement="auto"
      onChange={(selectedOption: any) => {
        const selectedCodeSnippet = currentCodeSummaryInfo.listOfSnippets.find(
          (codeSnippet) => codeSnippet.id === selectedOption.value
        );

        if (selectedCodeSnippet) {
          setCurrentCodeSummaryInfo({
            ...currentCodeSummaryInfo,
            currentSnippet: selectedCodeSnippet,
          });
          setCurrentSnippetDropdownOption(selectedOption);

          sessionStorage.setItem("codeSnippetID", selectedCodeSnippet.id);
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
        const selectedHook = listOfHooks.find(
          (hook) => hook.id === selectedOption.value
        );

        if (selectedHook) {
          setCurrentCodeSummaryInfo({
            id: selectedHook.id,
            summary: selectedHook.summary(),
            pdf: selectedHook.pdf,
            currentSnippet: selectedHook.snippets[0],
            listOfSnippets: selectedHook.snippets,
          });
          setCurrentSnippetDropdownOption({
            value: selectedHook.snippets[0].id,
            label: selectedHook.snippets[0].title,
          });
          setCurrentHookDropdownOption(selectedOption);

          sessionStorage.setItem("hookID", selectedHook.id);
          sessionStorage.setItem("codeSnippetID", selectedHook.snippets[0].id);
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

  const {
    summary: currentCodeSummary,
    pdf: currentCodePDF,
    currentSnippet: currentCodeSnippet,
  } = currentCodeSummaryInfo;

  return (
    <div id="app">
      <div
        onClick={() => showCodePrompts && setShowCodePrompts(false)}
        className={classNames({
          "app__code-summary": true,
          "app__code-summary--blur": showCodePrompts,
        })}
      >
        <GithubCorner />
        <div className="app__code-summary-title">
          <ReactLogo />
          <p>Snippets of Hooks</p>
        </div>
        {messagePromptSection}
        <CodeSummary
          currentCodeSummary={currentCodeSummary}
          currentCodePDF={currentCodePDF}
          dropdownElement={snippetSelectDropdown}
        />
        <div className="app__code-summary-footer">
          <div>
            <a
              href="https://twitter.com/djirdehh"
              target="_blank"
              rel="noopener noreferrer"
              className="app__code-summary-footer-social"
            >
              <FaTwitterSquare size={22} />
            </a>
            <a
              href="https://buttondown.email/djirdehh/"
              target="_blank"
              rel="noopener noreferrer"
              className="app__code-summary-footer-social app__code-summary-footer-social--personal"
            >
              <FaEnvelope size={14} />
              Subscribe to my blog
            </a>
          </div>
          <div className="app__code-summary-footer-dropdown">
            {hookSelectDropdown}
          </div>
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
