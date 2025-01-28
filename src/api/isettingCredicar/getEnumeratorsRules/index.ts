import { AxiosRequestConfig } from "axios";
import { IEnumeratorsRules } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IEnumeratorsRules";
import { fetchWithRetries } from "../axiosConfig/getRequests";

const getEnumeratorsRules = async (
  ruleName: string,
  bussinesUnits: string,
): Promise<IEnumeratorsRules> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "GetByIdBusinessRuleCatalog",
      "X-Business-unit": bussinesUnits,
    },
  };
  return fetchWithRetries<IEnumeratorsRules>(
    `/enums/business-rules-catalog/${ruleName}`,
    config,
  );
};

export { getEnumeratorsRules };
