import { useState, useEffect } from "react";
import { IEnumeratorsRules } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { getEnumeratorsRules } from "@api/isettingCredicarQuery";

const useEnumRules = (enumDestination: string, bussinesUnits: string) => {
  const [enumRuleData, setEnumRuleData] = useState<IEnumeratorsRules>(
    {} as IEnumeratorsRules,
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
