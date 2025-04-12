import { useContext } from "react";
import { IEntry } from "@design/data/table/types";
import { usePayrollAgreementTab } from "@hooks/payrollAgreement/usePayrollAgreementTab";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { PayrollAgreementTabUI } from "./interface";

const PayrollAgreementTab = () => {
  const { appData } = useContext(AuthAndPortalData);

  const {
    payrollAgreement,
    searchPayrollAgreement,
    loading,
    setEntryDeleted,
    handleSearchPayrollAgreement,
  } = usePayrollAgreementTab(appData.businessUnit.publicCode);

  return (
    <PayrollAgreementTabUI
      onSearchPayrollAgreement={handleSearchPayrollAgreement}
      searchPayrollAgreement={searchPayrollAgreement}
      loading={loading}
      entries={payrollAgreement as IEntry[]}
      setEntryDeleted={setEntryDeleted}
    />
  );
};

export { PayrollAgreementTab };
