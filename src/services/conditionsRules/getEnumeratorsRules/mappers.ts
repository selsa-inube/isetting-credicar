import { IRuleDecision } from "@isettingkit/input";

const mapEnumeratorsRulesApiToEntity = (
  enumerator: IRuleDecision,
): IRuleDecision => {
  const enumeratorEntry: IRuleDecision = {
    conditionThatEstablishesTheDecision: Object(
      enumerator.conditionThatEstablishesTheDecision,
    ),
    decisionDataType: enumerator.decisionDataType,
    descriptionUse: String(enumerator.descriptionUse),
    howToSetTheDecision: enumerator.howToSetTheDecision,
    labelName: String(enumerator.labelName),
    ruleName: String(enumerator.ruleName),
    listOfPossibleValues: Object(enumerator.listOfPossibleValues),
  };
  return enumeratorEntry;
};

export { mapEnumeratorsRulesApiToEntity };
