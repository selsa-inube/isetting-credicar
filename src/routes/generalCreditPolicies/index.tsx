import { Route, Routes } from "react-router-dom";
import { GeneralCreditPolicies } from "@pages/generalCreditPolicies";
import { AddGenCreditPolicies } from "@pages/generalCreditPolicies/addGeneralCreditPolicies";

const GeneralCreditPoliciesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralCreditPolicies />} />
      <Route
        path="add-general-credit-policies"
        element={<AddGenCreditPolicies />}
      />
    </Routes>
  );
};

export { GeneralCreditPoliciesRoutes };
