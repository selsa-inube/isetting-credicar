import { IRuleDecision, ValueDataType } from "@isettingkit/input";
import { sortDisplayDataSampleSwitchPlaces } from "@utils/decisions/sortDisplayDataSampleSwitchPlaces";
import { dataTranslations } from "@utils/dataTranslations";

const decisionTemplateConfig = (
  {
    ruleName,
    labelName,
    howToSetTheDecision,
    decisionDataType,
    conditionThatEstablishesTheDecision,
  }: IRuleDecision,
  conditionForSwitchPlace: string,
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
      conditionThatEstablishesTheDecision:
        conditionThatEstablishesTheDecision.map((condition) => ({
          conditionName: condition.conditionName,
          labelName: dataTranslations[condition.labelName],
          conditionDataType: condition.conditionDataType,
          value:
            condition.conditionName === "MoneyDestination"
              ? conditionForSwitchPlace
              : "",
          howToSetTheCondition: condition.howToSetTheCondition,
          switchPlaces: condition.conditionName === "MoneyDestination",
        })),
    };

    return sortDisplayDataSampleSwitchPlaces(decisionTemplate);
  }
};

export { decisionTemplateConfig };
