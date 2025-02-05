import { DeleteRecord } from "@design/feedback/DeleteRecord";
import { useDeleteRequestInProgress } from "@hooks/moneyDestination/useDeleteRequestInProgress";
import { deleteRequestInProgress } from "@config/moneyDestination/moneyDestinationTab/generics/deleteRequestInProgress";
import { IEntry } from "@design/data/table/types";

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
      messageDelete={deleteRequestInProgress}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      onClick={handleClick}
      setJustificationDelete={setJustificationDelete}
    />
  );
};

export { Delete };
