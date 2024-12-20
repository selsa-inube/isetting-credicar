import { IRuleDecision } from "@isettingkit/input";

const dataTranslations: Record<string, string> = {
  "Money destination": "Destino de dinero",
  "Client type": "Tipo de cliente",
  "Line of credit": "Línea de crédito",
};

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

export { dataTranslations, revertModalDisplayData };
