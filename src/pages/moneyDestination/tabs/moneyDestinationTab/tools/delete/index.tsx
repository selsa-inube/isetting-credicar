import { useContext } from "react";
import { deleteMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/deleteMoneyDestinationModal";
import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { useDeleteDestination } from "@hooks/moneyDestination/useDeleteDestination";
import { IEntry } from "@design/data/table/types";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { useSaveMoneyDestination } from "@hooks/moneyDestination/useSaveMoneyDestination";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ComponentAppearance } from "@enum/appearances";
import { requestProcessMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestProcessMessage";
import { requestStatusMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestStatusMessage";

import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { RequestProcess } from "@src/design/feedback/RequestProcess";

interface IDelete {
  data: IEntry;
  setEntryDeleted: (id: string | number) => void;
}

const Delete = (props: IDelete) => {
  const { data } = props;
  const { appData } = useContext(AuthAndPortalData);

  const {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
  } = useDeleteDestination(data, appData);

  const {
    saveMoneyDestination,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = useSaveMoneyDestination(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setShowModal,
  );

  return (
    <>
      <DeleteRecord
        messageDelete={deleteMoneyDestinationModal}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      {showRequestProcessModal && saveMoneyDestination && (
        <RequestProcess
          portalId="portal"
          saveData={saveMoneyDestination}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
        />
      )}
      {showPendingReqModal && saveMoneyDestination?.requestNumber && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(saveMoneyDestination.responsible).title}
          description={
            requestStatusMessage(saveMoneyDestination.responsible).description
          }
          requestNumber={saveMoneyDestination.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          isLoading={false}
          actionText={
            requestStatusMessage(saveMoneyDestination.responsible).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
