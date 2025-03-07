import { Route, Routes } from "react-router-dom";
import { PayrollAgreement } from "@pages/payrollAgreement";

function PayrollAgreementRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PayrollAgreement />} />

    </Routes>
  );
}

export { PayrollAgreementRoutes };
