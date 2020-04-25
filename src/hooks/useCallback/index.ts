import { createMemoizedCallback } from "./createMemoizedCallback";
import { useCallbackSummary } from "./useCallbackSummary";

export const useCallbackHook = {
  id: "useCallback",
  snippets: [createMemoizedCallback],
  summary: useCallbackSummary,
  pdf: ""
};
