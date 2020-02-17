import React, { useState } from "react";
import { CodeSnippet, CodeSummary } from "./sections";
import { initialize, initializeWithFunction } from "./snippets/useState";

import "./styles/App.css";

export const App = () => {
  const [currentCodeSample, setCurrentCodeSample] = useState(initialize);
  const [listOfCodeSamples] = useState([initialize, initializeWithFunction]);

  const changeCodeSample = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCodeSample = listOfCodeSamples.find(
      codeSample => codeSample.id === evt.target.value
    );

    if (selectedCodeSample) {
      setCurrentCodeSample(selectedCodeSample);
    }
  };

  const selectDropdownOptions = listOfCodeSamples.map((codeSample, idx) => {
    return (
      <option value={codeSample.id} key={idx}>
        {codeSample.title}
      </option>
    );
  });

  const selectDropdown = (
    <select onChange={evt => changeCodeSample(evt)}>{selectDropdownOptions}</select>
  );

  return (
    <div id="app">
      <div className="app__code-summary">
        <CodeSummary dropdownElement={selectDropdown} />
      </div>
      <div className="app__code-snippet">
        <CodeSnippet codeSample={currentCodeSample} />
      </div>
    </div>
  );
};
