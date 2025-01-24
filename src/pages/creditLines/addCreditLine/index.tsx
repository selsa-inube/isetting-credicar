import { useAddCreditlines } from "@hooks/creditLine/useAddCreditLines";

import { AddCreditLinesUI } from "./interface";
import { addCreditLinesSteps } from "@config/creditLines/addCreditLine/assisted";


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
