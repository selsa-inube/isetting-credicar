import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { SelectBusinessUnitsRoutes } from "@routes/selectBusinessunits";
import { CreditLinesRoutes } from "@routes/creditLines";
import { MoneyDestinationRoutes } from "@routes/moneyDestination";

import { ErrorPage } from "@components/layout/ErrorPage";
import { Logout } from "@pages/login/logout";
import { AppPage } from "@components/layout/AppPage";
import { Landing } from "@pages/home/landing";


const mainNavigation = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="selectBusinessUnit/*"
        element={<SelectBusinessUnitsRoutes />}
      />
      <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
      <Route path="/" element={<AppPage />}>
        <Route path="credit-lines/*" element={<CreditLinesRoutes />} />
        <Route
          path="money-destination/*"
          element={<MoneyDestinationRoutes />}
        />
      </Route>
      <Route path="logout" element={<Logout />} />
    </>,
  ),
);

export { mainNavigation };