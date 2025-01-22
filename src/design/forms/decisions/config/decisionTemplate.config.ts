import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

import { dataTranslations } from "@utils/dataTranslations";
import { IEnumeratorsRules } from "../types";

const decisionTemplateConfig = ({
  labelName,
  decisionDataType,
  conditionThatEstablishesTheDecision,
}: IEnumeratorsRules) => {
  if (labelName && decisionDataType && conditionThatEstablishesTheDecision) {
    const decisionData = decisionDataType.toLocaleUpperCase();

    const decisionTemplate: IRuleDecision = {
      name: dataTranslations[labelName],
      dataType: ValueDataType[decisionData as keyof typeof ValueDataType],
      valueUse: ValueHowToSetUp.EQUAL,
      value: "",
      startDate: "",
      endDate: "",
      conditions: conditionThatEstablishesTheDecision.map((condition) => ({
        name: dataTranslations[condition.labelName],
        dataType: condition.conditionDataType as
          | "number"
          | "alphabetical"
          | "currency"
          | "date"
          | "percentage",
        value: "",
        valueUse: ValueHowToSetUp.EQUAL,
      })),
    };

    return decisionTemplate;
  }
};

export { decisionTemplateConfig };
