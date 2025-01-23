import { useContext } from "react";

import { useMoneyDestination } from "@hooks/MoneyDestination/useMoneyDestination";

import { IEntry } from "@components/data/Table/types";
import { MoneyDestinationTabUI } from "./interface";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

function MoneyDestinationTab() {
  const { appData } = useContext(AuthAndPortalData);

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
