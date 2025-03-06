import { useContext } from "react";

import { useMoneryDestinationPage } from "@hooks/moneyDestination/useMoneryDestinationPage";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ICardData } from "@ptypes/home/ICardData";
import { PayrollAgreementUI } from "./interface";
import { payrollAgreementTabsConfig } from "@config/payrollAgreement/tabs";

function PayrollAgreement() {
  const { businessUnitSigla } = useContext(AuthAndPortalData);
  const { isSelected, descriptionOptions, handleTabChange } =
    useMoneryDestinationPage(businessUnitSigla);

  return (
    <PayrollAgreementUI
      isSelected={isSelected ?? payrollAgreementTabsConfig.payrollAgreement.id}
      handleTabChange={handleTabChange}
      descriptionOptions={descriptionOptions as ICardData}
    />
  );
}

export { PayrollAgreement };
