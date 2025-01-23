interface IEnumeratorsMoneyDestination {
  code: string;
  description: string;
  value: string;
}

interface IconditionsByBusinessRule {
  conditionDataType: string;
  conditionName: string;
  descriptionUse: string;
  howToSetTheCondition: string;
  labelName: string;
  listOfPossibleValues?: string;
}

interface IEnumeratorsRules {
  conditionThatEstablishesTheDecision: IconditionsByBusinessRule[];
  decisionDataType: string;
  descriptionUse: string;
  howToSetTheDecision: string;
  labelName: string;
  ruleName: string;
  listOfPossibleValues?: string;
}

interface IMoneyDestinationData {
  abbreviatedName: string | JSX.Element;
  descriptionUse: string;
  iconReference: string;
  moneyDestinationId: string;
  id?: string | number;
}

export type {
  IEnumeratorsMoneyDestination,
  IEnumeratorsRules,
  IMoneyDestinationData,
};
