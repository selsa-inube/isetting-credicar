import { useAddCreditlines } from "@hooks/creditlines/useAddCreditLines";
import { AddCreditLinesUI } from "./interface";
import { addCreditLinesSteps } from "./config/assisted.config";

function Addcreditlines() {
  const {
    currentStep,
    formValues,
    formReferences,
    optionsProspect,
    setOptionsProspect,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
  } = useAddCreditlines();

  return (
    <AddCreditLinesUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addCreditLinesSteps}
      optionsProspect={optionsProspect}
      setOptionsProspect={setOptionsProspect}
    />
  );
}

export { Addcreditlines };
