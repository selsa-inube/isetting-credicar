import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect } from "react";

import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { CheckingCredentialsUI } from "./interface";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

interface ICheckingCredentials {
   businessUnits: IBusinessUnitsPortalStaff[];
};

function CheckingCredentials(props: ICheckingCredentials) {
  const { businessUnits } = props;
  const navigate = useNavigate();
  const { appData, setBusinessUnitSigla } = useContext(AuthAndPortalData);

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
    const timer = setTimeout(checkCredentials, 2000);
    return () => clearTimeout(timer);
  }, [checkCredentials]);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
export type { ICheckingCredentials };
