import { AxiosRequestConfig } from "axios";
import { IRuleDecision } from "@isettingkit/input";
import { IEvaluateRuleRequest } from "@ptypes/decisions/IEvaluateRuleRequest";
import { postWithRetries } from "@services/core/postWithRetries";
import { mapEvaluateRuleByBusinessEntities } from "./mappers";

const evaluateRuleByBusinessUnit = async (
  bussinesUnits: string,
  rulesData: IEvaluateRuleRequest,
): Promise<IRuleDecision[] | undefined> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "EvaluteRuleByBusinessUnit",
      "X-Business-unit": bussinesUnits,
    },
  };

  const data: IRuleDecision[] | undefined = await postWithRetries<
    IRuleDecision[] | undefined
  >(
    `/crediboard-business-unit-rules`,
    config,
    rulesData as unknown as string[],
  );

  return mapEvaluateRuleByBusinessEntities(data);
};

export { evaluateRuleByBusinessUnit };
