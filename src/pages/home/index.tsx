import { useContext, useEffect, useRef, useState } from "react";
import { appCards } from "@config/appCards";

import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { HomeUI } from "./interface";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

function Home() {
  const { appData, businessUnitsToTheStaff, setBusinessUnitSigla } =
    useContext(AuthAndPortalData);
  const [collapse, setCollapse] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string>("");

  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appData.businessUnit.publicCode) {
      setSelectedClient(appData.businessUnit.abbreviatedName);
    }
  }, [appData]);

  const handleLogoClick = (businessUnit: IBusinessUnitsPortalStaff) => {
    const selectJSON = JSON.stringify(businessUnit);
    setBusinessUnitSigla(selectJSON);
    setSelectedClient(businessUnit.abbreviatedName);
    setCollapse(false);
  };
  return (
    <HomeUI
      appData={appData}
      businessUnitChangeRef={businessUnitChangeRef}
      businessUnitsToTheStaff={businessUnitsToTheStaff}
      collapse={collapse}
      collapseMenuRef={collapseMenuRef}
      data={appCards}
      selectedClient={selectedClient}
      setCollapse={setCollapse}
      handleLogoClick={handleLogoClick}
    />
  );
}

export { Home };
