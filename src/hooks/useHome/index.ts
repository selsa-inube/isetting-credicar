import { AuthAndPortalData } from "@src/context/authAndPortalDataProvider";
import { IBusinessUnitsPortalStaff } from "@src/types/staffPortal/IBusinessUnitsPortalStaff";
import { useContext, useEffect, useRef, useState } from "react";

const useHome = () => {
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

  return {
    appData,
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    setCollapse,
    handleLogoClick,
  };
};

export { useHome };
