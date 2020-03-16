import { memoizedCallback } from "./memoizedCallback";
import { useCallbackSummary } from "./useCallbackSummary";

export const useCallbackHook = {
  id: "useCallback",
  snippets: [memoizedCallback],
  summary: useCallbackSummary
};
