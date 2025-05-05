import { useMediaQuery } from "@inubekit/inubekit";
import { useContext, useEffect, useState } from "react";
import { ChangeToRequestTab } from "@context/changeToRequestTab";
import { decrypt } from "@utils/crypto/decrypt";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";
import { IUsePayrollAgreementPage } from "@ptypes/hooks/payrollAgreement/IUsePayrollAgreementPage";

const usePayrollAgreementPage = (props: IUsePayrollAgreementPage) => {
  const { businessUnitSigla } = props;
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";
  const [isSelected, setIsSelected] = useState<string>(
    payrollAgreementTabsConfig.payrollAgreement.id,
  );

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

  const smallScreen = useMediaQuery("(max-width: 990px)");
  const smallScreenTab = useMediaQuery("(max-width: 450px)");

  const showPayrollAgreementTab =
    isSelected === payrollAgreementTabsConfig.payrollAgreement.id;

  const showRequestsInProgressTab =
    isSelected === payrollAgreementTabsConfig.requestsInProgress.id;

  return {
    isSelected,
    descriptionOptions,
    showPayrollAgreementTab,
    showRequestsInProgressTab,
    smallScreen,
    smallScreenTab,
    handleTabChange,
  };
};

export { usePayrollAgreementPage };
