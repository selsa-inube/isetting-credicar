import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useEditDestination } from "@hooks/moneyDestination/useEditDestination";
import { editDestinationTabsConfig } from "@config/moneyDestination/editDestination/tabs";
import { useSaveMoneyDestination } from "@hooks/moneyDestination/useSaveMoneyDestination";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { EditDestinationUI } from "./interface";

const EditDestination = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndPortalData);

  const {
    creditLineDecisions,
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    onSubmit,
    handleReset,
    setCreditLineDecisions,
    setIsCurrentFormValid,
    handleTabChange,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
  } = useEditDestination(data, appData);

  const {
    saveMoneyDestination,
    requestSteps,
    loading,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = useSaveMoneyDestination(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setErrorFetchSaveData,
  );

  return (
    <EditDestinationUI
      creditLineDecisions={creditLineDecisions}
      editDestinationTabsConfig={editDestinationTabsConfig}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues}
      onButtonClick={onSubmit}
      onReset={handleReset}
      setCreditLineDecisions={setCreditLineDecisions}
      setIsCurrentFormValid={setIsCurrentFormValid}
      saveMoneyDestination={saveMoneyDestination as ISaveDataResponse}
      requestSteps={requestSteps}
      loading={loading}
      showPendingReqModal={showPendingReqModal}
      showRequestProcessModal={showRequestProcessModal}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
    />
  );
};

export { EditDestination };
