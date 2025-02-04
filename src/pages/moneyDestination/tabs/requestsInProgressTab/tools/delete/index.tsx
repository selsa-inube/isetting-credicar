import { IEntry } from "@components/data/Table/types";
import { deleteMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/deleteMoneyDestinationModal";
import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { useDeleteRequestInProgress } from "@hooks/moneyDestination/useDeleteRequestInProgress";

interface IDelete {
  data: IEntry;
  setEntryDeleted: (id: string | number) => void;
}

const Delete = (props: IDelete) => {
  const { data, setEntryDeleted } = props;

  const { showModal, handleToggleModal, handleClick, setJustificationDelete } =
    useDeleteRequestInProgress(data, setEntryDeleted);

  return (
    <DeleteRecord
      messageDelete={deleteMoneyDestinationModal}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      onClick={handleClick}
      setJustificationDelete={setJustificationDelete}
    />
  );
};

export { Delete };
