import { IEnumeratorsRules } from "@design/forms/decisions/types";

const mapEnumeratorsRulesApiToEntity = (
  enumerator: IEnumeratorsRules,
): IEnumeratorsRules => {
  const enumeratorEntry: IEnumeratorsRules = {
    conditionThatEstablishesTheDecision: Object(
      enumerator.conditionThatEstablishesTheDecision,
    ),
    decisionDataType: String(enumerator.decisionDataType),
    descriptionUse: String(enumerator.descriptionUse),
    howToSetTheDecision: String(enumerator.howToSetTheDecision),
    labelName: String(enumerator.labelName),
    ruleName: String(enumerator.ruleName),
    listOfPossibleValues: String(enumerator.listOfPossibleValues),
  };
  return enumeratorEntry;
};

export { mapEnumeratorsRulesApiToEntity };
