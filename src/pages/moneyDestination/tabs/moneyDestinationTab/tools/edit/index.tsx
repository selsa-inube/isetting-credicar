import { IEntry } from "@design/data/table/types";
import { EditRecord } from "@design/feedback/editRecord";
import { useEditDestinationConsultation } from "@hooks/moneyDestination/useEditDestinationConsultation";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit } = useEditDestinationConsultation(data);
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };
