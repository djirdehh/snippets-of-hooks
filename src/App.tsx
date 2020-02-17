import React, { useState } from "react";
import Select from "react-select";
import { CodeSnippet, CodeSummary } from "./sections";
import { useStateHook, useEffectHook } from "./hooks";

import "./styles/App.css";

const listOfHooks = [useStateHook, useEffectHook];

export const App = () => {
  const [currentCodeSummary, setCurrentCodeSummary] = useState<React.ReactNode>(
    useStateHook.summary
  );
  const [currentCodeSnippet, setCurrentCodeSnippet] = useState(useStateHook.snippets[0]);
  const [listOfCodeSnippets, setListOfCodeSnippets] = useState(useStateHook.snippets);

  const snippetDropdownOptions = listOfCodeSnippets.map(codeSnippet => {
    return { value: codeSnippet.id, label: codeSnippet.title };
  });

  const hookDropdownOptions = [
    { value: "useState", label: "useState" },
    { value: "useEffect", label: "useEffect" }
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
          codeSnippet => codeSnippet.id === selectedOption.value
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
        const selectedHook = listOfHooks.find(hook => hook.id === selectedOption.value);

        if (selectedHook) {
          setCurrentCodeSummary(selectedHook.summary);
          setCurrentCodeSnippet(selectedHook.snippets[0]);
          setListOfCodeSnippets(selectedHook.snippets);
          setCurrentSnippetDropdownOption({
            value: selectedHook.snippets[0].id,
            label: selectedHook.snippets[0].title
          });
          setCurrentHookDropdownOption(selectedOption);
        }
      }}
    />
  );

  return (
    <div id="app">
      <div className="app__code-summary">
        <CodeSummary
          currentCodeSummary={currentCodeSummary}
          dropdownElement={snippetSelectDropdown}
        />
        <div className="app__code-summary-footer">
          <div className="app__code-summary-footer-dropdown">{hookSelectDropdown}</div>
        </div>
      </div>
      <div className="app__code-snippet">
        <CodeSnippet codeSnippet={currentCodeSnippet} />
      </div>
    </div>
  );
};
