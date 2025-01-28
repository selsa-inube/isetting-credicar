import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@context/AppContext";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";

const useCheckCredentials = (businessUnits: IBusinessUnitsPortalStaff[]) => {
  const navigate = useNavigate();
  const { appData, setBusinessUnitSigla } = useContext(AppContext);

  const selectedBusinessUnit = () => {
    const selected = businessUnits[0];
    setBusinessUnitSigla(JSON.stringify(selected));
    navigate("/selectBusinessUnit/loading-app");
  };

  const checkCredentials = useCallback(() => {
    try {
      if (!appData) {
        return navigate("/selectBusinessUnit/error/not-available");
      }

      if (!businessUnits || businessUnits.length === 0) {
        return navigate("/selectBusinessUnit/error/not-related-businessUnits");
      }

      if (businessUnits.length === 1) {
        selectedBusinessUnit();
      } else {
        navigate(`/selectBusinessUnit/businessUnits`);
      }
    } catch (error) {
      console.info(error);
      navigate("/selectBusinessUnit/error/not-available");
    }
  }, [appData, businessUnits, selectedBusinessUnit, navigate]);

  return checkCredentials;
};

export { useCheckCredentials };
