import { IRuleDecision } from "@isettingkit/input";
import { AxiosRequestConfig } from "axios";

import { IEvaluateRuleRequest } from "@src/types/decisions/IEvaluateRuleRequest";
import { fetchWithRetries } from "../axiosConfig/postRequests";

const postEvaluateRule = async (
  bussinesUnits: string,
  data: IEvaluateRuleRequest,
): Promise<IRuleDecision[] | undefined> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "EvaluteRuleByBusinessUnit",
      "X-Business-unit": bussinesUnits,
    },
  };
  return fetchWithRetries<IRuleDecision[] | undefined>(
    `/crediboard-business-unit-rules`,
    config,
    data as unknown as string[],
  );
};

export { postEvaluateRule };
