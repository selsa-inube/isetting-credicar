import { useNavigate } from "react-router-dom";
import { IEntry } from "@design/data/table/types";

const useEditPayrollConsultation = (payrollAgreementData: IEntry) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/payroll-agreement/edit-payroll`, {
      state: { data: payrollAgreementData },
    });
  };

  return {
    handleEdit,
  };
};

export { useEditPayrollConsultation };
