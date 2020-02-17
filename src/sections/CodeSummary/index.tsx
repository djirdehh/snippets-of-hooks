import React from "react";

import "./styles/CodeSummary.css";

interface Props {
  currentCodeSummary: React.ReactNode;
  dropdownElement: React.ReactNode;
}

export const CodeSummary = ({ currentCodeSummary, dropdownElement }: Props) => {
  return (
    <div id="code-summary">
      {currentCodeSummary}
      <div className="code-summary__dropdown-section">
        <h5 className="code-summary__section-title">Variations</h5>
        {dropdownElement}
      </div>
    </div>
  );
};
