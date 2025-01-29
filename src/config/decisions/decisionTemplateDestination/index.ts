import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";
import { IEnumeratorsRules } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IEnumeratorsRules";
import { dataTranslations } from "@utils/dataTranslations";

const decisionTemplateConfig = (
  {
    ruleName,
    labelName,
    decisionDataType,
    conditionThatEstablishesTheDecision,
  }: IEnumeratorsRules,
  conditionForSwitchPlace: string,
) => {
  if (labelName && decisionDataType && conditionThatEstablishesTheDecision) {
    const decisionData = decisionDataType.toLocaleUpperCase();

    const decisionTemplate: IRuleDecision = {
      ruleName: ruleName,
      labelName: dataTranslations[labelName],
      decisionDataType:
        ValueDataType[decisionData as keyof typeof ValueDataType],
      howToSetTheDecision: ValueHowToSetUp.EQUAL,
      value: "",
      effectiveFrom: "",
      validUntil: "",
      conditionThatEstablishesTheDecision:
        conditionThatEstablishesTheDecision.map((condition) => ({
          conditionName: condition.conditionName,
          labelName: dataTranslations[condition.labelName],
          conditionDataType: condition.conditionDataType as
            | "number"
            | "alphabetical"
            | "currency"
            | "date"
            | "percentage",
          value:
            condition.conditionName === "MoneyDestination"
              ? conditionForSwitchPlace
              : "",
          howToSetTheCondition: ValueHowToSetUp.EQUAL,
          switchPlaces: condition.conditionName === "MoneyDestination",
        })),
    };

    const data: IRuleDecision = { ...decisionTemplate };
    const conditionToDisplay = data.conditionThatEstablishesTheDecision?.find(
      (condition) => condition.switchPlaces,
    );

    if (conditionToDisplay) {
      return {
        ...data,
        ruleName: conditionToDisplay.conditionName,
        labelName: conditionToDisplay.labelName,
        decisionDataType: conditionToDisplay.conditionDataType,
        value: conditionToDisplay.value,
        howToSetTheDecision: conditionToDisplay.howToSetTheCondition,
        conditionThatEstablishesTheDecision:
          data.conditionThatEstablishesTheDecision!.map((condition) =>
            condition.conditionName === conditionToDisplay.conditionName
              ? { ...condition, hidden: true }
              : condition,
          ),
      };
    }

    return data;
  }
};

export { decisionTemplateConfig };
