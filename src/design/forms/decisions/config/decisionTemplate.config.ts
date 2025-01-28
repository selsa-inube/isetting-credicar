import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";
import { IEnumeratorsRules } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IEnumeratorsRules";
import { dataTranslations } from "@utils/dataTranslations";

const decisionTemplateConfig = ({
  ruleName,
  labelName,
  decisionDataType,
  conditionThatEstablishesTheDecision,
}: IEnumeratorsRules) => {
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
          value: condition.labelName,
          howToSetTheCondition: ValueHowToSetUp.EQUAL,
          hidden: condition.conditionName === "MoneyDestination",
          switchPlaces: condition.conditionName === "MoneyDestination",
        })),
    };

    return decisionTemplate;
  }
};

export { decisionTemplateConfig };
