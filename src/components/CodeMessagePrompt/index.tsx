import React from "react";
import { MdInfo, MdPlayArrow } from "react-icons/md";

import "./styles/CodeMessagePrompt.css";

interface Props {
  lineNumberPrompt: number | null;
  messagePrompt: string;
}

export const CodeMessagePrompt = ({ lineNumberPrompt, messagePrompt }: Props) => {
  if (lineNumberPrompt == null || messagePrompt == null) {
    return (
      <blockquote className="code-summary-message-prompt">
        <h5>
          Select a presented line of code in the Code Snippet <MdPlayArrow />
        </h5>
      </blockquote>
    );
  }

  return (
    <blockquote className="code-summary-message-prompt">
      <p>
        <MdInfo color="#3c4fe0" size={19} /> Line #{lineNumberPrompt}
      </p>
      <h4>{messagePrompt}</h4>
    </blockquote>
  );
};
