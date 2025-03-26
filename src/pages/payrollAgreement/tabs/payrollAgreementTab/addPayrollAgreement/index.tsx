import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted/steps";
import { useAddPayrollAgreement } from "@hooks/payrollAgreement/useAddPayrollAgreement";
import { AddPayrollAgreementUI } from "./interface";

function AddPayrollAgreement() {
  const {
    currentStep,
    formValues,
    formReferences,
    isCurrentFormValid,
    showGoBackModal,
    sourcesOfIncomeValues,
    smallScreen,
    setSourcesOfIncomeValues,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    handleOpenModal,
    handleCloseModal,
    handleGoBack,
  } = useAddPayrollAgreement();

  return (
    <AddPayrollAgreementUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialGeneralInformationValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      steps={addPayrollAgreementSteps}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      sourcesOfIncomeValues={sourcesOfIncomeValues}
      setSourcesOfIncomeValues={setSourcesOfIncomeValues}
      onGoBack={handleGoBack}
      showGoBackModal={showGoBackModal}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
      smallScreen={smallScreen}
    />
  );
}

export { AddPayrollAgreement };
