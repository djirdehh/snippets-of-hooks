import { dispatchActionToUpdateState } from "./dispatchActionToUpdateState";
import { lazyInitializationOfState } from "./lazyInitializationOfState";
import { useReducerSummary } from "./useReducerSummary";

export const useReducerHook = {
  id: "useReducer",
  snippets: [dispatchActionToUpdateState, lazyInitializationOfState],
  summary: useReducerSummary,
  pdf: ""
};
