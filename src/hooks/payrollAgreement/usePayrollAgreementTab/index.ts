import { useEffect, useState } from "react";
import { getPayrollAgreementData } from "@services/payrollAgreement/getPayrollAgreement";
import { IPayrollAgreementData } from "@ptypes/payrollAgreement/payrollAgreementTab/IPayrollAgreementData";

const usePayrollAgreementTab = (bussinesUnits: string) => {
  const [payrollAgreement, setPayrollAgreement] = useState<
    IPayrollAgreementData[]
  >([]);
  const [hasError, setHasError] = useState(false);
  const [searchPayrollAgreement, setSearchPayrollAgreement] =
    useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayrollAgreementData = async () => {
      setLoading(true);
      try {
        const data = await getPayrollAgreementData(bussinesUnits);
        setPayrollAgreement(data);
      } catch (error) {
        console.info(error);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPayrollAgreementData();
  }, []);

  const handleSearchPayrollAgreement = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchPayrollAgreement(e.target.value);
  };

  return {
    payrollAgreement,
    searchPayrollAgreement,
    loading,
    hasError,
    handleSearchPayrollAgreement,
  };
};

export { usePayrollAgreementTab };
