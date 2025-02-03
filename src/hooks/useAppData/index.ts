import { useContext, useEffect } from "react";

import { IUser } from "@ptypes/app.types";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useAuthRedirect } from "../authentication/useAuthRedirect";
import { usePortalData } from "../staffPortal/usePortalData";
import { useBusinessManagers } from "../staffPortal/useBusinessManagers";

const useAppData = (
  portalCode: string | null,
  code: string | undefined,
  user: IUser,
  businessUnit: string | undefined,
) => {
  const { setBusinessUnitSigla } = useContext(AuthAndPortalData);
  const updateAppData = () => {
    if (code) {
      localStorage.setItem("portalCode", code);
    }

    if (businessUnit) {
      localStorage.setItem("businessUnitSigla", businessUnit);
      setBusinessUnitSigla(businessUnit);
    }

    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, userName: user.name }),
      );
    }
  };

  useEffect(() => {
    updateAppData();
  }, [user, code, businessUnit]);

  let hasError = false;
  let isLoading = false;
  let isAuthenticated = true;

  if (!code) {
    const { portalData, hasError: portalError } = usePortalData(portalCode);
    const { businessManagersData, hasError: businessError } =
      useBusinessManagers(portalData);

    const {
      hasError: authError,
      isLoading: authLoading,
      isAuthenticated: authAuthenticated,
    } = useAuthRedirect(portalData, businessManagersData, portalCode);

    hasError = portalError || businessError || authError;
    isLoading = authLoading;
    isAuthenticated = authAuthenticated;
  }

  return { hasError, isLoading, isAuthenticated };
};

export { useAppData };
