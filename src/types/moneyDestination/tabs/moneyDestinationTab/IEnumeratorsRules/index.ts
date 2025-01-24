import { IConditionsByBusinessRule } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IConditionsByBusinessRule";

interface IEnumeratorsRules {
  conditionThatEstablishesTheDecision: IConditionsByBusinessRule[];
  decisionDataType: string;
  descriptionUse: string;
  howToSetTheDecision: string;
  labelName: string;
  ruleName: string;
  listOfPossibleValues?: string;
}

export type { IEnumeratorsRules };