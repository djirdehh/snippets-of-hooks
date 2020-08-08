import { dispatchActionToUpdateState } from "./dispatchActionToUpdateState";
import { lazyInitializationOfState } from "./lazyInitializationOfState";
import { useReducerSummary } from "./useReducerSummary";

export const useReducerHook = {
  id: "useReducer",
  snippets: [dispatchActionToUpdateState, lazyInitializationOfState],
  summary: useReducerSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1596924327/hooks-cheatsheets/use-reducer.pdf",
};
