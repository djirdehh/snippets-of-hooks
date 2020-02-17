import { initialize } from "./initialize";
import { initializeWithFunction } from "./initializeWithFunction";
import { useStateSummary } from "./useStateSummary";

export const useStateHook = {
  snippets: [initialize, initializeWithFunction],
  summary: useStateSummary
};
