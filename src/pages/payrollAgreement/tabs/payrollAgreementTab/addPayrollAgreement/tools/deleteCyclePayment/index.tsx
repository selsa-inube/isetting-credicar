import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { IEntry } from "@design/data/table/types";
import { useDeleteCyclePayment } from "@hooks/payrollAgreement/useDeleteCyclePayment";
import { deleteCyclePaymentModal } from "@config/payrollAgreement/payrollAgreementTab/generic/deleteCyclePaymentModal";

interface IDeleteCyclePayment {
  data: IEntry;
  setEntryDeleted: (value: string | number) => void;
  uniqueEditionRecord?: number;
  setShowDeletedAlertModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCyclePayment = (props: IDeleteCyclePayment) => {
  const {
    data,
    setEntryDeleted,
    uniqueEditionRecord,
    setShowDeletedAlertModal,
  } = props;

  const { showModal, handleToggleModal, handleClick } = useDeleteCyclePayment(
    data,
    setEntryDeleted,
    uniqueEditionRecord,
    setShowDeletedAlertModal,
  );

  return (
    <DeleteRecord
      messageDelete={deleteCyclePaymentModal}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      onClick={handleClick}
      loading={false}
    />
  );
};

export { DeleteCyclePayment };
