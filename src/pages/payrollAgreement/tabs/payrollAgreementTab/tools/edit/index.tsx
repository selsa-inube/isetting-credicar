import { IEntry } from "@design/data/table/types";
import { EditRecord } from "@design/feedback/editRecord";
import { useEditPayrollConsultation } from "@hooks/payrollAgreement/edit/useEditPayrollConsultation";

interface IEdit {
  data: IEntry;
}

const Edit = (props: IEdit) => {
  const { data } = props;

  const { handleEdit } = useEditPayrollConsultation(data);
  return <EditRecord onEdit={handleEdit} />;
};

export { Edit };
