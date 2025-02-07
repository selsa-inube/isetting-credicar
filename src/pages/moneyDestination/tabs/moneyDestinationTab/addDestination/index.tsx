import { useContext } from "react";
import { useAddDestination } from "@hooks/moneyDestination/useAddDestination";
import { addDestinationStepsConfig } from "@config/moneyDestination/addDestination/assisted";
import { useSaveMoneyDestination } from "@hooks/moneyDestination/useSaveMoneyDestination";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
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
    saveData,
    handleNextStep,
    handlePreviousStep,
    handleSubmitClick,
    handleToggleModal,
    setCreditLineDecisions,
    setCurrentStep,
    setIsCurrentFormValid,
    setShowRequestProcessModal,
  } = useAddDestination();

  const { appData } = useContext(AuthAndPortalData);

  const {
    saveMoneyDestination,
    requestSteps,
    loading,
    handleCloseRequestStatus,
  } = useSaveMoneyDestination(
    appData.businessUnit.publicCode,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
  );

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
      requestSteps={requestSteps}
      showRequestProcessModal={showRequestProcessModal}
      saveMoneyDestination={saveMoneyDestination as ISaveDataResponse}
      loading={loading}
      onCloseRequestStatus={handleCloseRequestStatus}
    />
  );
}

export { AddDestination };
