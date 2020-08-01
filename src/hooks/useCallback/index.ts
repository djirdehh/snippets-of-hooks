import { createMemoizedCallback } from "./createMemoizedCallback";
import { useCallbackSummary } from "./useCallbackSummary";

export const useCallbackHook = {
  id: "useCallback",
  snippets: [createMemoizedCallback],
  summary: useCallbackSummary,
  pdf: "https://res.cloudinary.com/djirdehh/image/upload/v1587936686/use-callback.pdf"
};
