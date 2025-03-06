import { IRuleDecision } from "@isettingkit/input";
import { decisionsEqual } from "../decisionsEqual";

const arraysEqual = (arr1: IRuleDecision[], arr2: IRuleDecision[]) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!decisionsEqual(arr1[i], arr2[i])) return false;
  }
  return true;
};

export { arraysEqual };
