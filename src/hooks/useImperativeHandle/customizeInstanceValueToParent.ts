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
  const ref = useRef();
  const focusOnInput = () => ref.current.focus();

  return (
    <>
      <Input ref={ref} />
      <button onClick={focusOnInput}>
        Click me to focus on input!
      </button>
    </>
  );
};`,
  fontSize: 11,
  notes: {
    3: "Use the forwardRef function to forward the ref object from the parent onto this child component.",
    4: "Create a mutable reference object that remains persistent through the lifetime of this child component.",
    5: "Use the useImperative Hook to imperatively declare how the instance value exposed by the parent ref is to be customized.",
    6: "Here we specify that the ref object in the parent is to contain a function property that when executed is to run the intended function in the child component's ref object.",
    7: "Use the useImperative Hook to imperatively declare how the instance value exposed by the parent ref is to be customized.",
    8: "Return the template of the child component and use the child component's ref object.",
    9: "Use the forwardRef function to forward the ref object from the parent onto this child component.",
    12: "Create a mutable reference object that remains persistent through the lifetime of the parent component and pass it down to the child component.",
    13: "When button is clicked, the function in the parent's customized ref instance is run.",
    17: "Create a mutable reference object that remains persistent through the lifetime of the parent component and pass it down to the child component.",
    18: "When button is clicked, the function in the parent's customized ref instance is run.",
    20: "When button is clicked, the function in the parent's customized ref instance is run.",
  },
  link: "https://codesandbox.io/s/useimperativehandle01-0b0ls",
};
