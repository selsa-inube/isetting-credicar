import { useContext, useEffect, useState } from "react";
import { moneyDestinationTabsConfig } from "@config/moneyDestination/tabs";
import { ChangeToRequestTab } from "@context/changeToRequestTab";

const useMoneryDestinationPage = () => {
  const [isSelected, setIsSelected] = useState<string>();

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);

  useEffect(() => {
    if (changeTab) {
      setIsSelected(moneyDestinationTabsConfig.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === moneyDestinationTabsConfig.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(moneyDestinationTabsConfig.requestsInProgress.id);
    }
  }, [isSelected]);

  return {
    isSelected,
    handleTabChange,
  };
};

export { useMoneryDestinationPage };
