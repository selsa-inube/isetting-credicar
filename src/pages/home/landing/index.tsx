import { useContext } from "react";

import { Home } from "@pages/home";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

const Landing = () => {
  const { businessUnitSigla } = useContext(AuthAndPortalData);
  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
};

export { Landing };