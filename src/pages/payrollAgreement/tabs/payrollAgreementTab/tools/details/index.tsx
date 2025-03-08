import { IEntry } from "@design/data/table/types";
import { DetailsPayrollAgreement } from "@design/feedback/detailsPayrollAgreement";
import { useDetailsPayrollAgreement } from "@hooks/payrollAgreement/useDetailsPayrollAgreement";
import { detailsPayrollAgreementTabsConfig } from "@config/payrollAgreement/payrollAgreementTab/details/tabs";
import { labelsDetails } from "@config/payrollAgreement/payrollAgreementTab/details/labels";
import { labelsPaymentCard } from "@config/payrollAgreement/payrollAgreementTab/details/labelsPaymentCard";

interface IDetails {
  data: IEntry;
}

const Details = (props: IDetails) => {
  const { data } = props;

  const {
    showModal,
    normalizeData,
    isSelected,
    isMobile,
    filteredTabsConfig,
    defaultSelectedTab,
    ordinaryPaymentData,
    extraordinaryPaymentData,
    handleTabChange,
    handleToggleModal,
  } = useDetailsPayrollAgreement(data, detailsPayrollAgreementTabsConfig);

  return (
    <DetailsPayrollAgreement
      namePayroll={data.abbreviatedName || ""}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      isSelected={isSelected || defaultSelectedTab || ""}
      defaultSelectedTab={defaultSelectedTab || ""}
      filteredTabsConfig={filteredTabsConfig}
      detailsTabsConfig={detailsPayrollAgreementTabsConfig}
      data={normalizeData}
      isMobile={isMobile}
      labelsDetails={labelsDetails}
      labelsPaymentCard={labelsPaymentCard}
      ordinaryPaymentData={ordinaryPaymentData()}
      extraordinaryPaymentData={extraordinaryPaymentData()}
      onTabChange={handleTabChange}
    />
  );
};

export { Details };
