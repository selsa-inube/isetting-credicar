import { mainCards } from "@config/mainCard";
import { useHome } from "@hooks/useHome";
import { HomeUI } from "./interface";

function Home() {
  const {
    appData,
    businessUnitChangeRef,
    businessUnitsToTheStaff,
    collapse,
    collapseMenuRef,
    selectedClient,
    setCollapse,
    handleLogoClick,
  } = useHome();

  return (
    <HomeUI
      appData={appData}
      businessUnitChangeRef={businessUnitChangeRef}
      businessUnitsToTheStaff={businessUnitsToTheStaff}
      collapse={collapse}
      collapseMenuRef={collapseMenuRef}
      data={mainCards}
      selectedClient={selectedClient}
      setCollapse={setCollapse}
      handleLogoClick={handleLogoClick}
    />
  );
}

export { Home };
