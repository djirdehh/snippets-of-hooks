import { createMutableRefObject } from "./createMutableRefObject";
import { useRefSummary } from "./useRefSummary";

export const useRefHook = {
  id: "useRef",
  snippets: [createMutableRefObject],
  summary: useRefSummary
};
