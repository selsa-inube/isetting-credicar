import { useContext } from "react";
import { useHome } from "@hooks/useHome";
import { useOptionsByBusinessUnit } from "@hooks/staffPortal/useOptionsByBusinessUnit";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { decrypt } from "@utils/crypto/decrypt";
import { ICardData } from "@ptypes/home/ICardData";
import { HomeUI } from "./interface";

function Home() {
  const { businessUnitSigla, appData } = useContext(AuthAndPortalData);
  const portalId = localStorage.getItem("portalCode");
  const staffPortalId = portalId ? decrypt(portalId) : "";

  const {
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    setCollapse,
    handleLogoClick,
  } = useHome();

  const { optionsCards, loading } = useOptionsByBusinessUnit(
    businessUnitSigla,
    staffPortalId,
  );

  return (
    <HomeUI
      appData={appData}
      businessUnitChangeRef={businessUnitChangeRef}
      businessUnitsToTheStaff={businessUnitsToTheStaff}
      collapse={collapse}
      collapseMenuRef={collapseMenuRef}
      data={optionsCards as ICardData[]}
      selectedClient={selectedClient}
      setCollapse={setCollapse}
      handleLogoClick={handleLogoClick}
      loading={loading}
    />
  );
}

export { Home };
