import { useState } from "react";
import { MoneyDestinationTabUI } from "./interface";

function MoneyDestinationTab() {
  const [searchMoneyDestination, setSearchMoneyDestination] =
    useState<string>("");

  const handleSearchMoneyDestination = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchMoneyDestination(e.target.value);
  };

  return (
    <MoneyDestinationTabUI
      onSearchMoneyDestination={handleSearchMoneyDestination}
      searchMoneyDestination={searchMoneyDestination}
      loading={false}
      onAddDestination={() => console.log("Add destination")}
    />
  );
}

export { MoneyDestinationTab };
