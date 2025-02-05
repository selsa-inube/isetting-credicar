import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IAppData } from "@ptypes/context/authAndPortalDataProvider/IAppData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

const useCheckingCredentials = (
  businessUnits: IBusinessUnitsPortalStaff[],
  appData: IAppData,
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>,
) => {
  const navigate = useNavigate();

  const selectedBusinessUnit = () => {
    const selected = businessUnits[0];
    setBusinessUnitSigla(JSON.stringify(selected));
    navigate("/selectBusinessUnit/loading-app");
  };

  const checkCredentials = useCallback(() => {
    try {
      if (!appData) {
        return;
      }

      if (appData) {
        if (!businessUnits || businessUnits.length === 0) {
          navigate("/selectBusinessUnit/error/not-related-businessUnits");
        } else if (businessUnits.length === 1) {
          selectedBusinessUnit();
        } else {
          navigate(`/selectBusinessUnit/businessUnits`);
        }
      } else {
        navigate("/selectBusinessUnit/error/not-available");
      }
    } catch (error) {
      console.info(error);
      navigate("/selectBusinessUnit/error/not-available");
    }
  }, [appData, navigate, businessUnits]);

  useEffect(() => {
    const timer = setTimeout(() => checkCredentials(), 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);
};

export { useCheckingCredentials };
