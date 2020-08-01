import { effectOnEveryRender } from "./effectOnEveryRender";
import { effectOnFirstRender } from "./effectOnFirstRender";
import { effectWithCleanUp } from "./effectWithCleanUp";
import { effectWithDependency } from "./effectWithDependency";
import { useLayoutEffectSummary } from "./useLayoutEffectSummary";

export const useLayoutEffectHook = {
  id: "useLayoutEffect",
  snippets: [
    effectOnEveryRender,
    effectOnFirstRender,
    effectWithCleanUp,
    effectWithDependency
  ],
  summary: useLayoutEffectSummary,
  pdf:
    "https://res.cloudinary.com/djirdehh/image/upload/v1587936042/use-layout-effect.pdf"
};
