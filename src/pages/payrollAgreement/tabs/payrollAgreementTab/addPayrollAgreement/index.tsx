import { addPayrollAgreementSteps } from "@config/payrollAgreement/payrollAgreementTab/assisted";
import { useAddPayrollAgreement } from "@hooks/payrollAgreement/useAddPayrollAgreement";
import { AddPayrollAgreementUI } from "./interface";

function AddPayrollAgreement() {
  const {
    currentStep,
    formValues,
    formReferences,
    isCurrentFormValid,
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
    />
  );
}

export { AddPayrollAgreement };
