import { createMutableRefObject } from "./createMutableRefObject";
import { useRefSummary } from "./useRefSummary";

export const useRefHook = {
  id: "useRef",
  snippets: [createMutableRefObject],
  summary: useRefSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1586718575/hooks-cheatsheets/use-ref.pdf"
};
