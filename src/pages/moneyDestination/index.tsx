import { useState } from "react";

import { MoneyDestinationUI } from "./interface";
import { MoneyDestinationTabsConfig } from "./config/tabs.config";

function MoneyDestination() {
  const [isSelected, setIsSelected] = useState<string>();

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return (
    <MoneyDestinationUI
      isSelected={isSelected ?? MoneyDestinationTabsConfig.moneyDestination.id}
      handleTabChange={handleTabChange}
    />
  );
}

export { MoneyDestination };
