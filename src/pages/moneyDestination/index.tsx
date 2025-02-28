import { useContext } from "react";
import { moneyDestinationTabsConfig } from "@config/moneyDestination/tabs";
import { useMoneryDestinationPage } from "@hooks/moneyDestination/useMoneryDestinationPage";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ICardData } from "@ptypes/home/ICardData";
import { MoneyDestinationUI } from "./interface";

function MoneyDestination() {
  const { businessUnitSigla } = useContext(AuthAndPortalData);
  const { isSelected, descriptionOptions, handleTabChange } =
    useMoneryDestinationPage(businessUnitSigla);

  return (
    <MoneyDestinationUI
      isSelected={isSelected ?? moneyDestinationTabsConfig.moneyDestination.id}
      handleTabChange={handleTabChange}
      descriptionOptions={descriptionOptions as ICardData}
    />
  );
}

export { MoneyDestination };
