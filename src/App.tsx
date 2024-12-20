import { useContext, useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { enviroment } from "./config/environment";
import { AppContext } from "./context/AppContext";
import { usePortalData } from "./hooks/usePortalData";
import { useBusinessManagers } from "./hooks/useBusinessManagers";
import { useAuthRedirect } from "./hooks/useAuthRedirect";
import { ErrorPage } from "./components/layout/ErrorPage";
import { SelectBusinessUnitsRoutes } from "./routes/selectBusinessunits";
import { SelectBusinessUnits } from "./pages/selectBusinessUnits";
import { Home } from "./pages/home";
import { GlobalStyles } from "./styles/global";
import { MoneyDestinationRoutes } from "./routes/moneyDestination";
import { CreditLinesRoutes } from "./routes/creditLines";
import { AppPage } from "./components/layout/AppPage";
import { IUser } from "./types/app.types";

function LogOut() {
  localStorage.clear();
  const { logout } = useAuth0();
  logout({ logoutParams: { returnTo: enviroment.REDIRECT_URI } });
  return <Home />;
}

function FirstPage() {
  const { businessUnitSigla } = useContext(AppContext);

  return businessUnitSigla.length === 0 ? <SelectBusinessUnits /> : <Home />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route path="/" element={<FirstPage />} errorElement={<ErrorPage />} />
      <Route path="/" element={<AppPage />}>
        <Route path="credit-lines/*" element={<CreditLinesRoutes />} />
        <Route
          path="money-destination/*"
          element={<MoneyDestinationRoutes />}
        />
      </Route>
      <Route path="logout" element={<LogOut />} />
    </>,
  ),
);

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
  const { setAppData, setBusinessUnitSigla } = useContext(AppContext);

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
