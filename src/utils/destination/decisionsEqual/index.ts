import { IRuleDecision } from "@isettingkit/input";

const decisionsEqual = (dec1: IRuleDecision, dec2: IRuleDecision) => {
  return (
    dec1.ruleName === dec2.ruleName &&
    JSON.stringify(dec1) === JSON.stringify(dec2)
  );
};

export { decisionsEqual };
