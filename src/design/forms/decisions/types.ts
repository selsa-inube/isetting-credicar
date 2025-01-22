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

interface IMessageModal {
  title: string;
  description: string;
  actionText: string;
}

interface IRulesFormTextValues {
  cancel: string;
  change: string;
  changePlaceholder: string;
  confirm: string;
  criteria: string;
  factsThatConditionIt: string;
  none: string;
  rangeMax: (label: string) => string;
  rangeMin: (label: string) => string;
  reasonForChange: string;
  selectOption: string;
  selectOptions: string;
  termEnd: string;
  terms: string;
  termStart: string;
}

export type { IEnumeratorsRules, IMessageModal, IRulesFormTextValues };
