import { useContext } from "react";

import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useCheckingCredentials } from "@hooks/authentication/useCheckingCredentials";
import { CheckingCredentialsUI } from "./interface";

interface ICheckingCredentials {
  businessUnits: IBusinessUnitsPortalStaff[];
}

function CheckingCredentials(props: ICheckingCredentials) {
  const { businessUnits } = props;

  const { appData, setBusinessUnitSigla } = useContext(AuthAndPortalData);

  useCheckingCredentials(businessUnits, appData, setBusinessUnitSigla);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
export type { ICheckingCredentials };
