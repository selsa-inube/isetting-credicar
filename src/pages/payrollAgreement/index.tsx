import { useContext } from "react";

import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ICardData } from "@ptypes/home/ICardData";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";
import { usePayrollAgreementPage } from "@hooks/payrollAgreement/usePayrollAgreementPage";
import { PayrollAgreementUI } from "./interface";

function PayrollAgreement() {
  const { businessUnitSigla } = useContext(AuthAndPortalData);
  const { isSelected, descriptionOptions, handleTabChange } =
  usePayrollAgreementPage(businessUnitSigla);

  return (
    <PayrollAgreementUI
      isSelected={isSelected ?? payrollAgreementTabsConfig.payrollAgreement.id}
      handleTabChange={handleTabChange}
      descriptionOptions={descriptionOptions as ICardData}
    />
  );
}

export { PayrollAgreement };
