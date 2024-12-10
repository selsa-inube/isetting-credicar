import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { validateBusinessUnities } from "@pages/selectBusinessUnits/utils";

const useSelectBusinessUnits = () => {
  const navigate = useNavigate();
  const { appData, setBusinessUnitsToTheStaff } = useContext(AppContext);
  const location = useLocation();

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
};

export { useSelectBusinessUnits };
