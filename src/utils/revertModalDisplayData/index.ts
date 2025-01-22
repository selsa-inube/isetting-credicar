import { IRuleDecision } from "@isettingkit/input";

const revertModalDisplayData = (
  dataDecision: IRuleDecision,
  originalDecision: IRuleDecision,
) => {
  const conditionToRestore = {
    name: dataDecision.name,
    dataType: dataDecision.dataType,
    value: dataDecision.value,
    valueUse: dataDecision.valueUse,
    possibleValue: dataDecision.possibleValue,
    switchPlaces: true,
  };

  return {
    ...originalDecision,
    conditions: dataDecision.conditions?.map((condition) =>
      condition.hidden ? conditionToRestore : condition,
    ),
  };
};

export { revertModalDisplayData };
