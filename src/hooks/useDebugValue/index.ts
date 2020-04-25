import { createDevToolsLabelForCustomHook } from "./createDevToolsLabelForCustomHook";
import { deferFormattingToWhenInspected } from "./deferFormattingToWhenInspected";
import { useDebugValueSummary } from "./useDebugValueSummary";

export const useDebugValueHook = {
  id: "useDebugValue",
  snippets: [createDevToolsLabelForCustomHook, deferFormattingToWhenInspected],
  summary: useDebugValueSummary,
  pdf: ""
};
