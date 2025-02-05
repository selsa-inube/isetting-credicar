import { AxiosRequestConfig } from "axios";
import { IRuleDecision } from "@isettingkit/input";

import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/isettingCredicar";
import { mapEnumeratorsRulesApiToEntity } from "./mappers";

const getEnumeratorsRules = async (
  ruleName: string,
  bussinesUnits: string,
): Promise<IRuleDecision> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetByIdBusinessRuleCatalog",
      "X-Business-unit": bussinesUnits,
    },
  };
  const data: IRuleDecision = await getWithRetries<IRuleDecision>(
    axiosInstance,
    `/enums/business-rules-catalog/${ruleName}`,
    config,
  );
  return mapEnumeratorsRulesApiToEntity(data);
};

export { getEnumeratorsRules };
