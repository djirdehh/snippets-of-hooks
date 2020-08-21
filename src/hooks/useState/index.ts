import { initialize } from "./initialize";
import { initializeWithFunction } from "./initializeWithFunction";
import { updateState } from "./updateState";
import { updateStateWithPreviousState } from "./updateStateWithPreviousState";
import { useStateSummary } from "./useStateSummary";

export const useStateHook = {
  id: "useState",
  snippets: [
    initialize,
    initializeWithFunction,
    updateState,
    updateStateWithPreviousState,
  ],
  summary: useStateSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1586706760/hooks-cheatsheets/use-state.pdf",
};
