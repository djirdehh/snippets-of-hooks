import { createDevToolsLabelForCustomHook } from "./createDevToolsLabelForCustomHook";
import { deferFormattingToWhenInspected } from "./deferFormattingToWhenInspected";
import { useDebugValueSummary } from "./useDebugValueSummary";

export const useDebugValueHook = {
  id: "useDebugValue",
  snippets: [createDevToolsLabelForCustomHook, deferFormattingToWhenInspected],
  summary: useDebugValueSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1587934818/hooks-cheatsheets/use-debug-value.pdf",
};
