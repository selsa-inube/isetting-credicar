import { useContext } from "react";

import { useMoneyDestination } from "@hooks/MoneyDestination/useMoneyDestination";
import { AppContext } from "@context/AppContext";
import { IEntry } from "@components/data/Table/types";
import { MoneyDestinationTabUI } from "./interface";

function MoneyDestinationTab() {
  const { appData } = useContext(AppContext);

  const {
    moneyDestination,
    searchMoneyDestination,
    loading,
    handleSearchMoneyDestination,
  } = useMoneyDestination(appData.businessUnit.publicCode);

  return (
    <MoneyDestinationTabUI
      onSearchMoneyDestination={handleSearchMoneyDestination}
      searchMoneyDestination={searchMoneyDestination}
      loading={loading}
      entries={moneyDestination as IEntry[]}
    />
  );
}

export { MoneyDestinationTab };
