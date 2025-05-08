import { useContext } from "react";

import { useMoneyDestination } from "@hooks/moneyDestination/useMoneyDestination";

import { IEntry } from "@design/data/table/types";
import { MoneyDestinationTabUI } from "./interface";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

function MoneyDestinationTab() {
  const { appData } = useContext(AuthAndPortalData);

  const {
    moneyDestination,
    searchMoneyDestination,
    loading,
    smallScreen,
    columnWidths,
    handleSearchMoneyDestination,
    setEntryDeleted,
  } = useMoneyDestination(appData.businessUnit.publicCode);

  return (
    <MoneyDestinationTabUI
      onSearchMoneyDestination={handleSearchMoneyDestination}
      searchMoneyDestination={searchMoneyDestination}
      loading={loading}
      entries={moneyDestination as IEntry[]}
      setEntryDeleted={setEntryDeleted}
      smallScreen={smallScreen}
      columnWidths={columnWidths}
    />
  );
}

export { MoneyDestinationTab };
