import { useState, useEffect } from "react";

import { IRuleDecision } from "@isettingkit/input";
import { getEnumeratorsRules } from "@services/conditionsRules/getEnumeratorsRules";

const useEnumRules = (enumDestination: string, bussinesUnits: string) => {
  const [enumRuleData, setEnumRuleData] = useState<IRuleDecision>(
    {} as IRuleDecision,
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchEnumData = async () => {
      try {
        const data = await getEnumeratorsRules(enumDestination, bussinesUnits);

        setEnumRuleData(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchEnumData();
  }, []);

  return { enumRuleData, hasError };
};

export { useEnumRules };
