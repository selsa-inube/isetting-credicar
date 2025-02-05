import { useContext } from "react";
import { useSelectBusinessUnits } from "@hooks/selectBusinessUnits/useSelectBusinessUnits";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { SelectBusinessUnitsUI } from "./interface";

function SelectBusinessUnits() {
  const { appData, setBusinessUnitsToTheStaff } = useContext(AuthAndPortalData);

  const { imageWidth, screenTablet, screenDesktop } = useSelectBusinessUnits(
    appData,
    setBusinessUnitsToTheStaff,
  );

  return (
    <SelectBusinessUnitsUI
      appData={appData}
      screenTablet={screenTablet}
      screenDesktop={screenDesktop}
      imageWidth={imageWidth}
    />
  );
}

export { SelectBusinessUnits };
