import { useContext } from "react";

import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { IEntry } from "@design/data/table/types";
import { AuthAndPortalData } from "@context/authAndPortalDataProvider";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ComponentAppearance } from "@enum/appearances";
import { requestProcessMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestProcessMessage";
import { requestStatusMessage } from "@config/moneyDestination/moneyDestinationTab/generics/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { RequestProcess } from "@design/feedback/RequestProcess";
import { useSavePayrollAgreement } from "@hooks/payrollAgreement/useSavePayrollAgreement";
import { deletePayrollAgreModal } from "@config/payrollAgreement/payrollAgreementTab/generic/deletePayrollAgreModal";
import { useDeletePayroll } from "@hooks/payrollAgreement/useDeletePayroll";

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
    setShowPendingReq,
  } = useDeletePayroll(data, appData);

  const {
    savePayrollAgreement,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
  } = useSavePayrollAgreement(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setShowModal,
    setShowPendingReq,
  );

  const showRequestProcess = showRequestProcessModal && savePayrollAgreement;
  const showRequestStatus =
    showPendingReqModal && savePayrollAgreement?.requestNumber;

  return (
    <>
      <DeleteRecord
        messageDelete={deletePayrollAgreModal}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId="portal"
          saveData={savePayrollAgreement}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
        />
      )}
      {showRequestStatus && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePayrollAgreement.responsible).title}
          description={
            requestStatusMessage(savePayrollAgreement.responsible).description
          }
          requestNumber={savePayrollAgreement.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          isLoading={false}
          actionText={
            requestStatusMessage(savePayrollAgreement.responsible).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
