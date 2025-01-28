import { IconditionsByBusinessRule } from "../IconditionsByBusinessRule";

interface IEnumeratorsRules {
  conditionThatEstablishesTheDecision: IconditionsByBusinessRule[];
  decisionDataType: string;
  descriptionUse: string;
  howToSetTheDecision: string;
  labelName: string;
  ruleName: string;
  listOfPossibleValues?: string;
  hidden?: boolean;
}

export type { IEnumeratorsRules };
