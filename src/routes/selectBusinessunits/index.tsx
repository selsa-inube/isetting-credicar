import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { ErrorPage } from "@components/layout/ErrorPage";
import { IBusinessUnit } from "@pages/selectBusinessUnits/outlets/businessUnit/types";
import { SelectBusinessUnits } from "@pages/selectBusinessUnits";
import { BusinessUnits } from "@pages/selectBusinessUnits/outlets/businessUnit";
import { CheckingCredentials } from "@pages/login/checkingCredentials";
import { LoadingApp } from "@components/feedback/LoadingApp";
import { NotBusinessUnit } from "@pages/errors/notBusinessUnit";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";

interface IBusinessUnits {
  businessUnits: IBusinessUnit[];
}

const SelectBusinessUnitsRoutes = () => {
  const { businessUnitsToTheStaff } = useContext(AuthAndPortalData);
  const businessUnits = businessUnitsToTheStaff;

  return (
    <Routes>
      <Route path="/" element={<SelectBusinessUnits />}>
        <Route
          path="/checking-credentials"
          element={<CheckingCredentials businessUnits={businessUnits} />}
        />
        <Route
          path="/businessUnits"
          element={<BusinessUnits businessUnits={businessUnits} />}
        />
        <Route path="loading-app" element={<LoadingApp />} />
      </Route>
      <Route path="error/not-available" element={<ErrorPage />} />
      <Route
        path="error/not-related-businessUnits"
        element={<NotBusinessUnit />}
      />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { SelectBusinessUnitsRoutes };
export type { IBusinessUnits };