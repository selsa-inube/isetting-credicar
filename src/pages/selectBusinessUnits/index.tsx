import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SelectBusinessUnitsUI } from "./interface";
import { validateBusinessUnities } from "./utils";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

function SelectBusinessUnits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { appData, setBusinessUnitsToTheStaff } = useContext(AuthAndPortalData);

  useEffect(() => {
    if (appData.portal.publicCode) {
      validateBusinessUnities(
        appData.portal.publicCode,
        appData.user.userAccount,
      ).then((data) => {
        setBusinessUnitsToTheStaff(data);
      });
    }
  }, [appData.portal.publicCode]);

  useEffect(() => {
    if (
      location.pathname === "/selectBusinessUnit" ||
      location.pathname === "/selectBusinessUnit/" ||
      location.pathname === "/"
    ) {
      navigate(`/selectBusinessUnit/checking-credentials/`);
    }
  }, [location, navigate, appData]);

  return <SelectBusinessUnitsUI />;
}

export { SelectBusinessUnits };
