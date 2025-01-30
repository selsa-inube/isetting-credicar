import { IRuleDecision } from "@isettingkit/input";

import { postEvaluateRule } from "@api/isettingCredicar/postEvaluateRule";
import { IEvaluateRuleRequest } from "@src/types/decisions/IEvaluateRuleRequest";
import {
  mapEvaluateRuleByBusinessEntities,
  mapEvaluateRuleByBusinessEntityToApi,
} from "./mappers";

const evaluateRuleByBusinessUnit = async (
  bussinesUnits: string,
  rulesData: IEvaluateRuleRequest,
): Promise<IRuleDecision[] | undefined> => {
  const data: IRuleDecision[] | undefined = await postEvaluateRule(
    bussinesUnits,
    mapEvaluateRuleByBusinessEntityToApi(rulesData),
  );
  return mapEvaluateRuleByBusinessEntities(data);
};

export { evaluateRuleByBusinessUnit };
