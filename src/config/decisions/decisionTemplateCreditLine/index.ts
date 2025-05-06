import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";
import { dataTranslations } from "@utils/dataTranslations";

const decisionTemplateConfig = ({
  ruleName,
  labelName,
  decisionDataType,
  conditionThatEstablishesTheDecision,
}: IRuleDecision) => {
  if (labelName && decisionDataType && conditionThatEstablishesTheDecision) {
    const decisionData = decisionDataType.toLocaleUpperCase();

    const decisionTemplate: IRuleDecision = {
      ruleName: ruleName,
      labelName: dataTranslations[labelName] ?? labelName,
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
          conditionDataType: condition.conditionDataType,
          value: "",
          howToSetTheCondition: ValueHowToSetUp.EQUAL,
        })),
    };

    return decisionTemplate;
  }
};

export { decisionTemplateConfig };
