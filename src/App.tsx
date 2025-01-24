import {
  RouterProvider,
} from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";

import { GlobalStyles } from "./styles/global";
import { usePortalData } from "@hooks/staffPortal/usePortalData";
import { useBusinessManagers } from "@hooks/staffPortal/useBusinessManagers";
import { useAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import {  AuthAndPortalDataProvider } from "@context/authAndPortalDataProvider";
import { mainNavigation } from "./routes/mainNavigation";


const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const portalCode = params.get("portal");

function App() {
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
