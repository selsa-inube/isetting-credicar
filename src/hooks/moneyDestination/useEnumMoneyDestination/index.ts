import { useState, useEffect } from "react";

import { enumeratorsMoneyDestination } from "@services/moneyDestination/getEnumeratorsMoneyDestination";
import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";

const useEnumMoneyDestination = (
  enumDestination: string,
  bussinesUnits: string,
) => {
  const [enumData, setEnumData] = useState<IEnumeratorsMoneyDestination[]>(
    [] as IEnumeratorsMoneyDestination[],
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchEnumData = async () => {
      try {
        const data = await enumeratorsMoneyDestination(
          enumDestination,
          bussinesUnits,
        );

        setEnumData(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      }
    };

    fetchEnumData();
  }, []);

  return { enumData, hasError };
};

export { useEnumMoneyDestination };
