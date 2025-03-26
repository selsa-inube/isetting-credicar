import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted/steps";
import { useAddPayrollAgreement } from "@hooks/payrollAgreement/useAddPayrollAgreement";
import { IOrdinaryCyclesEntry } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IOrdinaryCyclesEntry";
import { AddPayrollAgreementUI } from "./interface";

function AddPayrollAgreement() {
  const {
    currentStep,
    formValues,
    formReferences,
    formValid,
    showGoBackModal,
    sourcesOfIncomeValues,
    smallScreen,
    regularPaymentCycles,
    setSourcesOfIncomeValues,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    setRegularPaymentCycles,
    handleGoBack,
    handleOpenModal,
    handleCloseModal,
  } = useAddPayrollAgreement();

  return (
    <AddPayrollAgreementUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialGeneralInformationValues={formValues}
      formValid={formValid}
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
      regularPaymentCycles={regularPaymentCycles as IOrdinaryCyclesEntry[]}
      setRegularPaymentCycles={
        setRegularPaymentCycles as React.Dispatch<
          React.SetStateAction<IOrdinaryCyclesEntry[]>
        >
      }
    />
  );
}

export { AddPayrollAgreement };
