import { Route, Routes } from "react-router-dom";
import { PayrollAgreement } from "@pages/payrollAgreement";
import { AddPayrollAgreement } from "@pages/payrollAgreement/tabs/payrollAgreementTab/addPayrollAgreement";

function PayrollAgreementRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PayrollAgreement />} />
      <Route path="add-payroll-agreement" element={<AddPayrollAgreement />} />
    </Routes>
  );
}

export { PayrollAgreementRoutes };
