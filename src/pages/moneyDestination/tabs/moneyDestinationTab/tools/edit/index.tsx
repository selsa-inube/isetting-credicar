import { IEntry } from "@design/data/table/types";
import { editMoneyDestinationModal } from "@config/moneyDestination/moneyDestinationTab/generics/editMoneyDestinationModal";
import { EditRecord } from "@design/feedback/editRecord";
import { useEditDestinationModal } from "@hooks/moneyDestination/useEditDestinationModal";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { showModal, handleEdit, handleToggleModal } =
    useEditDestinationModal(data);
  return (
    <EditRecord
      showModal={showModal}
      portalId="portal"
      editRecordMessage={editMoneyDestinationModal}
      onToggleModal={handleToggleModal}
      onEdit={handleEdit}
    />
  );
};

export { Edit };
