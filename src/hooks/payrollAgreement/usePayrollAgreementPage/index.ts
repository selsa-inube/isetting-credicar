import { useContext, useEffect, useState } from "react";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { decrypt } from "@utils/crypto/decrypt";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";

const usePayrollAgreementPage = (businessUnitSigla: string) => {
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const [isSelected, setIsSelected] = useState<string>();

  const { descriptionOptions } = useOptionsByBusinessUnit(
    businessUnitSigla,
    staffPortalId,
    "Nóminas de convenio",
  );

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };
  const { changeTab, setChangeTab } = useContext(ChangeToRequestTab);

  useEffect(() => {
    if (changeTab) {
      setIsSelected(payrollAgreementTabsConfig.requestsInProgress.id);
    }
  }, [changeTab]);

  useEffect(() => {
    if (isSelected === payrollAgreementTabsConfig.requestsInProgress.id) {
      setChangeTab(false);
      setIsSelected(payrollAgreementTabsConfig.requestsInProgress.id);
    }
  }, [isSelected]);

  return {
    isSelected,
    descriptionOptions,
    handleTabChange,
  };
};

export { usePayrollAgreementPage };
