import { createDevToolsLabelForCustomHook } from "./createDevToolsLabelForCustomHook";
import { useDebugValueSummary } from "./useDebugValueSummary";

export const useDebugValueHook = {
  id: "useDebugValue",
  snippets: [createDevToolsLabelForCustomHook],
  summary: useDebugValueSummary
};
