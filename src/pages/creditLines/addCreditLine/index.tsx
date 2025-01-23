import { useAddCreditlines } from "@hooks/creditLine/useAddCreditLines";
import { addCreditLinesSteps } from "./config/assisted.config";
import { AddCreditLinesUI } from "./interface";

function Addcreditlines() {
  const {
    currentStep,
    formValues,
    formReferences,
    optionsProspect,
    decisions,
    setOptionsProspect,
    isCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    setDecisions,
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
      decisions={decisions}
      setDecisions={setDecisions}
    />
  );
}

export { Addcreditlines };
