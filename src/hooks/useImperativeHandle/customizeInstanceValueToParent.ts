import { CodeSnippet } from "../../lib/types";

export const customizeInstanceValueToParent: CodeSnippet = {
  id: "useImperativeHandle_01",
  title: "Customize instance value exposed to parent components using ref",
  code: `import React, { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus();
  }));

  return <input ref={inputRef} />;
});

const FunctionComponent = () => {
  const inputRef = useRef(null);

  const focusOnInput = () => inputRef.current.focus();

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={focusOnInput}>
        Click me to focus on input!
      </button>
    </>
  );
};`,
  fontSize: 11,
  notes: {},
};
