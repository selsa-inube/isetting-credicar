import { IRuleDecision } from "@isettingkit/input";
import { decisionsEqual } from "../decisionsEqual";

const findDecision = (arr: IRuleDecision[], decision: IRuleDecision) => {
  return arr.find((item) => decisionsEqual(item, decision));
};

export { findDecision };
