import React from "react";
import { MdInfo, MdPlayArrow } from "react-icons/md";

import "./styles/CodeMessagePrompt.css";

interface Props {
  lineNumberPrompt: number | null;
  messagePrompt: string;
}

export const CodeMessagePrompt = ({ lineNumberPrompt, messagePrompt }: Props) => {
  const onClickMessagePrompt = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evt.stopPropagation();
  };

  if (lineNumberPrompt == null || messagePrompt == null) {
    return (
      <blockquote className="code-summary-message-prompt" onClick={onClickMessagePrompt}>
        <h4>
          Select a presented line of code in the Code Snippet{" "}
          <MdPlayArrow className="arrow-icon" />
        </h4>
      </blockquote>
    );
  }

  return (
    <blockquote className="code-summary-message-prompt" onClick={onClickMessagePrompt}>
      <h4>Line #{lineNumberPrompt}</h4>
      <p>{messagePrompt}</p>
      <MdInfo className="info-icon" color="#3c4fe0" size={19} />
    </blockquote>
  );
};
