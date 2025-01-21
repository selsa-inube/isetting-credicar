import { useAddCreditlines } from "@src/hooks/creditLines/useAddCreditLines";
import { addCreditLinesSteps } from "./config/assisted.config";
import { AddCreditLinesUI } from "./interface";

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
