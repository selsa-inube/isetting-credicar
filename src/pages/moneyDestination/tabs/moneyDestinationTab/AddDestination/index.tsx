import { addDestinationStepsConfig } from "./config/assisted.config";
import { AddDestinationUI } from "./interface";

import { useAddDestination } from "@hooks/MoneyDestination/useAddDestination";

function AddDestination() {
  const {
    creditLineDecisions,
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    showModal,
    handleNextStep,
    handlePreviousStep,
    handleSubmitClick,
    handleToggleModal,
    setCreditLineDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
  } = useAddDestination();

  return (
    <AddDestinationUI
      creditLineDecisions={creditLineDecisions}
      currentStep={currentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      onFinishForm={handleSubmitClick}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      onToggleModal={handleToggleModal}
      setCreditLineDecisions={setCreditLineDecisions}
      setCurrentStep={setCurrentStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      showModal={showModal}
      steps={addDestinationStepsConfig(nameDecision)}
    />
  );
}

export { AddDestination };
