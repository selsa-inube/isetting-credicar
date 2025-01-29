import { AxiosRequestConfig } from "axios";
import { IRuleDecision } from "@isettingkit/input";
import { fetchWithRetries } from "../axiosConfig/getRequests";

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
  return fetchWithRetries<IRuleDecision>(
    `/enums/business-rules-catalog/${ruleName}`,
    config,
  );
};

export { getEnumeratorsRules };
