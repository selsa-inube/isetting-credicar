import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted";
import { useAddPayrollAgreement } from "@hooks/payrollAgreement/useAddPayrollAgreement";
import { AddPayrollAgreementUI } from "./interface";

function AddPayrollAgreement() {
  const {
    currentStep,
    formValues,
    formReferences,
    isCurrentFormValid,
    sourcesOfIncomeValues,
    setSourcesOfIncomeValues,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
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
    />
  );
}

export { AddPayrollAgreement };
