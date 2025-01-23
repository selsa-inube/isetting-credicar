import { requestStepsMock } from "@mocks/moneydestination/requestProcess.mock";
import { useAddDestination } from "@hooks/moneyDestination/useAddDestination";
import { addDestinationStepsConfig } from "./config/assisted.config";
import { AddDestinationUI } from "./interface";

function AddDestination() {
  const {
    creditLineDecisions,
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    nameDecision,
    showModal,
    showRequestProcessModal,
    handleNextStep,
    handlePreviousStep,
    handleSubmitClick,
    handleToggleModal,
    setCreditLineDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
  } = useAddDestination(requestStepsMock);

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
      requestSteps={requestStepsMock}
      showRequestProcessModal={showRequestProcessModal}
    />
  );
}

export { AddDestination };
