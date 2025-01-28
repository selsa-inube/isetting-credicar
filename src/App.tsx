import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";

import { GlobalStyles } from "./styles/global";
import { usePortalData } from "@hooks/staffPortal/usePortalData";
import { useBusinessManagers } from "@hooks/staffPortal/useBusinessManagers";
import { useAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import {
  AuthAndPortalData,
  AuthAndPortalDataProvider,
} from "@context/authAndPortalDataProvider";
import { mainNavigation } from "./routes/mainNavigation";
import { IUser } from "@ptypes/app.types";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");

interface IApp {
  code?: string;
  businessUnit?: string;
  user?: IUser;
}

function App(props: IApp) {
  const { code, user, businessUnit } = props;
  const { setAppData, setBusinessUnitSigla } = useContext(AuthAndPortalData);

  const updateAppData = () => {
    if (code) {
      localStorage.setItem("portalCode", code);
    }

    if (businessUnit) {
      localStorage.setItem("businessUnitSigla", businessUnit);
      setBusinessUnitSigla(businessUnit);
    }

    if (user) {
      setAppData((prev) => ({
        ...prev,
        user: {
          userAccount: user.email,
          userName: user.name,
        },
      }));
    }
  };

  useEffect(() => {
    updateAppData();
  }, [user, code, businessUnit]);

  if (!code) {
    const { portalData, hasError: portalError } = usePortalData(portalCode);
    const { businessManagersData, hasError: businessError } =
      useBusinessManagers(portalData);

    const {
      hasError: authError,
      isLoading,
      isAuthenticated,
    } = useAuthRedirect(portalData, businessManagersData, portalCode);

    const hasError = portalError || businessError || authError;

    if (isLoading) {
      return null;
    }

    if (hasError && !isAuthenticated) {
      return <ErrorPage />;
    }

    if (!isAuthenticated) {
      return null;
    }
  }

  return (
    <>
      <GlobalStyles />
      <AuthAndPortalDataProvider>
        <RouterProvider router={mainNavigation} />
      </AuthAndPortalDataProvider>
    </>
  );
}

export default App;
