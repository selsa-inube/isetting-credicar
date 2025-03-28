import { IRuleDecision, ValueDataType } from "@isettingkit/input";
import { dataTranslations } from "@utils/dataTranslations";

const decisionTemplateConfig = (
  {
    ruleName,
    labelName,
    howToSetTheDecision,
    decisionDataType,
    conditionThatEstablishesTheDecision,
    listOfPossibleValues,
  }: IRuleDecision,
  nameMoneyDestination: string,
) => {
  if (labelName && decisionDataType && conditionThatEstablishesTheDecision) {
    const decisionData = decisionDataType.toLocaleUpperCase();

    const decisionTemplate: IRuleDecision = {
      ruleName: ruleName,
      labelName: dataTranslations[labelName],
      decisionDataType:
        ValueDataType[decisionData as keyof typeof ValueDataType],
      howToSetTheDecision: howToSetTheDecision,
      value: "",
      effectiveFrom: "",
      validUntil: "",
      listOfPossibleValues: listOfPossibleValues,
      conditionThatEstablishesTheDecision:
        conditionThatEstablishesTheDecision.map((condition) => ({
          conditionName: condition.conditionName,
          labelName: dataTranslations[condition.labelName],
          conditionDataType: condition.conditionDataType,
          value: nameMoneyDestination,
          listOfPossibleValues: condition.listOfPossibleValues,
          howToSetTheCondition: condition.howToSetTheCondition,
          hidden: condition.conditionName === "MoneyDestination",
        })),
    };

    return decisionTemplate;
  }
};

export { decisionTemplateConfig };
