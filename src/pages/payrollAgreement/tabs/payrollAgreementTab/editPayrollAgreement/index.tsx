import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEditPayrollAgreement } from "@hooks/payrollAgreement/edit/useEditPayrollAgreement";
import { useSavePayrollAgreement } from "@hooks/payrollAgreement/useSavePayrollAgreement";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { EditPayrollAgreementUI } from "./interface";

const EditPayrollAgreement = () => {
  const location = useLocation();
  const { data } = location.state ?? {};
  const { appData } = useContext(AuthAndPortalData);

  const {
    companyAgreement,
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showGoBackModal,
    showModal,
    showRequestProcessModal,
    smallScreen,
    sourcesOfIncomeValues,
    initialData,
    typeRegularPayroll,
    regularPaymentCycles,
    extraordinaryPayment,
    filteredTabsConfig,
    showDeletedAlertModal,
    handleToggleDeletedAlertModal,
    setExtraordinaryPayment,
    setRegularPaymentCycles,
    handleCloseGoBackModal,
    handleEditedModal,
    handleGoBack,
    handleOpenModal,
    handleReset,
    handleTabChange,
    handleToggleEditedModal,
    setIsCurrentFormValid,
    setShowModal,
    setShowRequestProcessModal,
    setSourcesOfIncomeValues,
  } = useEditPayrollAgreement(
    data ?? {
      abbreviatedName: "",
      payrollForDeductionAgreementType: "",
      numberOfDaysForReceivingTheDiscounts: 0,
    },
  );

  const {
    savePayrollAgreement,
    requestSteps,
    loadingSendData,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = useSavePayrollAgreement(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setShowModal,
  );

  return (
    <EditPayrollAgreementUI
      formReferences={generalInformationRef}
      formValues={formValues}
      initialValues={initialData}
      setIsCurrentFormValid={setIsCurrentFormValid}
      smallScreen={smallScreen}
      sourcesOfIncomeValues={sourcesOfIncomeValues}
      setSourcesOfIncomeValues={setSourcesOfIncomeValues}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      onReset={handleReset}
      handleOpenModal={handleOpenModal}
      companyAgreement={companyAgreement}
      showRequestProcessModal={showRequestProcessModal}
      savePayrollAgreement={savePayrollAgreement as ISaveDataResponse}
      showPendingReqModal={showPendingReqModal}
      requestSteps={requestSteps}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
      onGoBack={handleGoBack}
      onCloseGoBackModal={handleCloseGoBackModal}
      showEditedModal={showModal}
      onToggleEditedModal={handleToggleEditedModal}
      onEditedModal={handleEditedModal}
      showGoBackModal={showGoBackModal}
      loadingSendData={loadingSendData}
      typeRegularPayroll={typeRegularPayroll}
      regularPaymentCycles={regularPaymentCycles}
      extraordinaryPayment={extraordinaryPayment}
      setExtraordinaryPayment={setExtraordinaryPayment}
      setRegularPaymentCycles={setRegularPaymentCycles}
      filteredTabsConfig={filteredTabsConfig}
      showDeletedAlertModal={showDeletedAlertModal}
      onToggleDeletedAlertModal={handleToggleDeletedAlertModal}
    />
  );
};

export { EditPayrollAgreement };
