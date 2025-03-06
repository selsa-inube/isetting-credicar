import { useContext, useEffect, useState } from "react";
import { moneyDestinationTabsConfig } from "@config/moneyDestination/tabs";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { decrypt } from "@utils/crypto/decrypt";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";

const useMoneryDestinationPage = (businessUnitSigla: string) => {
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const [isSelected, setIsSelected] = useState<string>();

  const { descriptionOptions } = useOptionsByBusinessUnit(
    businessUnitSigla,
    staffPortalId,
    "Destinos de dinero",
  );

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
    descriptionOptions,
    handleTabChange,
  };
};

export { useMoneryDestinationPage };
