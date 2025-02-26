import { useState, useEffect } from "react";

import { moneyDestinationData } from "@services/moneyDestination/getMoneyDestination";
import { IMoneyDestinationData } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IMoneyDestinationData";

const useMoneyDestination = (bussinesUnits: string) => {
  const [moneyDestination, setMoneyDestination] = useState<
    IMoneyDestinationData[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchMoneyDestination, setSearchMoneyDestination] =
    useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnumData = async () => {
      setLoading(true);
      try {
        const data = await moneyDestinationData(bussinesUnits);

        setMoneyDestination(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEnumData();
  }, []);

  const handleSearchMoneyDestination = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchMoneyDestination(e.target.value);
  };

  return {
    moneyDestination,
    hasError,
    searchMoneyDestination,
    loading,
    handleSearchMoneyDestination,
  };
};

export { useMoneyDestination };
