import { useState } from "react";

import { MoneyDestinationUI } from "./interface";
import { moneyDestinationTabsConfig } from "./config/tabs.config";

function MoneyDestination() {
  const [isSelected, setIsSelected] = useState<string>();

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <MoneyDestinationUI
      isSelected={isSelected ?? moneyDestinationTabsConfig.moneyDestination.id}
      handleTabChange={handleTabChange}
    />
  );
}

export { MoneyDestination };
