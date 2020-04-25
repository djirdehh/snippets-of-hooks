import { effectOnEveryRender } from "./effectOnEveryRender";
import { effectOnFirstRender } from "./effectOnFirstRender";
import { effectWithCleanUp } from "./effectWithCleanUp";
import { effectWithDependency } from "./effectWithDependency";
import { useEffectSummary } from "./useEffectSummary";

export const useEffectHook = {
  id: "useEffect",
  snippets: [
    effectOnEveryRender,
    effectOnFirstRender,
    effectWithCleanUp,
    effectWithDependency
  ],
  summary: useEffectSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1586712125/hooks-cheatsheets/use-effect.pdf"
};
