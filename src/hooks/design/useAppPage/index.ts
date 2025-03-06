import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { decrypt } from "@utils/crypto/decrypt";

const useAppPage = (
  appData: IAppData,
  businessUnitSigla: string,
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [collapse, setCollapse] = useState(false);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);
  const [selectedClient, setSelectedClient] = useState<string>("");
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const { optionsCards } = useOptionsByBusinessUnit(
    businessUnitSigla,
    staffPortalId,
  );

  const navigate = useNavigate();

  const location = useLocation();

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
    navigate("/");
  };

  return {
    collapse,
    collapseMenuRef,
    optionsCards,
    businessUnitChangeRef,
    selectedClient,
    location,
    setCollapse,
    handleLogoClick,
  };
};

export { useAppPage };
