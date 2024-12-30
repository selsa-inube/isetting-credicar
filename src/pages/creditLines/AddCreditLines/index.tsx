import { useAddCreditlines } from "@hooks/creditlines/useAddCreditLines";
import { addCreditLinesSteps } from "./config/assisted.config";
import { AddCreditLinesUI } from "./interface";

function Addcreditlines() {
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = useAddCreditlines();

  return (
    <AddCreditLinesUI
      currentStep={currentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addCreditLinesSteps}
    />
  );
}

export { Addcreditlines };
