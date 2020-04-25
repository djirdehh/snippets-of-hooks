import React from "react";
import { IoMdOpen } from "react-icons/io";

import "./styles/CodeSummary.css";

interface Props {
  currentCodeSummary: React.ReactNode;
  currentCodePDF: string;
  dropdownElement: React.ReactNode;
}

export const CodeSummary = ({
  currentCodeSummary,
  currentCodePDF,
  dropdownElement
}: Props) => {
  const launchPDF = () => {
    window.open(currentCodePDF);
  };

  return (
    <div id="code-summary">
      {currentCodeSummary}
      <div className="code-summary__dropdown-section">
        <h5 className="code-summary__section-title">Variations</h5>
        {dropdownElement}
      </div>
      <div className="code-summary__button-section">
        <button onClick={launchPDF}>
          <span>
            <IoMdOpen size={17} />
            Launch PDF Cheatsheet
          </span>
        </button>
      </div>
    </div>
  );
};
