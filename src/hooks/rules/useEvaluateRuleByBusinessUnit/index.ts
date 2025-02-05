import { useState, useEffect } from "react";
import { IRuleDecision } from "@isettingkit/input";

import { evaluateRuleByBusinessUnit } from "@services/conditionsRules/postEvaluateRuleByBusinessUnit";
import { IEvaluateRuleRequest } from "@src/types/decisions/IEvaluateRuleRequest";

const useEvaluateRuleByBusinessUnit = (
  bussinesUnits: string,
  rulesData: IEvaluateRuleRequest,
) => {
  const [evaluateRuleData, setEvaluateRuleData] = useState<
    IRuleDecision[] | undefined
  >([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchEvaluateRule = async () => {
      try {
        const data = await evaluateRuleByBusinessUnit(bussinesUnits, rulesData);

        setEvaluateRuleData(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchEvaluateRule();
  }, []);

  return { evaluateRuleData, hasError };
};

export { useEvaluateRuleByBusinessUnit };
