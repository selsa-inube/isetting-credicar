import { moneyDestinationTabsConfig } from "@config/moneyDestination/tabs";
import { useMoneryDestinationPage } from "@hooks/moneyDestination/useMoneryDestinationPage";
import { MoneyDestinationUI } from "./interface";

function MoneyDestination() {
  const { isSelected, handleTabChange } = useMoneryDestinationPage();

  return (
    <MoneyDestinationUI
      isSelected={isSelected ?? moneyDestinationTabsConfig.moneyDestination.id}
      handleTabChange={handleTabChange}
    />
  );
}

export { MoneyDestination };
