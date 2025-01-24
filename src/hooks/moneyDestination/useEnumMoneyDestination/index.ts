import { useState, useEffect } from "react";
import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { enumeratorsMoneyDestination } from "@services/moneyDestination/getEnumeratorsMoneyDestination";

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
