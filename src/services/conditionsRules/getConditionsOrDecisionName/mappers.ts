import { ICondtionOrDecision } from "@ptypes/decisions/ICondtionOrDecision";

const mapConditionsOrDecApiToEntity = (
  condition: ICondtionOrDecision,
): ICondtionOrDecision => {
  const conditionEntry: ICondtionOrDecision = {
    possibleValues: Object(condition.possibleValues),
  };
  return conditionEntry;
};

export { mapConditionsOrDecApiToEntity };
