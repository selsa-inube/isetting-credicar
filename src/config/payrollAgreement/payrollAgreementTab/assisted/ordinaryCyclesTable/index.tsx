import { IAction, IEntry, ITitle } from "@design/data/table/types";
import { DeleteCyclePayment } from "@pages/payrollAgreement/tabs/payrollAgreementTab/addPayrollAgreement/tools/deleteCyclePayment";

const titles: ITitle[] = [
  {
    id: "cycleId",
    titleName: "Ciclo",
    priority: 0,
  },
  {
    id: "nameCycle",
    titleName: "Nombre",
    priority: 1,
  },
  {
    id: "periodicity",
    titleName: "Periodicidad",
    priority: 2,
  },
  {
    id: "payday",
    titleName: "Día de pago",
    priority: 3,
  },
  {
    id: "numberDaysUntilCut",
    titleName: "# de días para el corte",
    priority: 4,
  },
];

const actionsConfig = (
  setEntryDeleted: (value: string | number) => void,
  uniqueEditionRecord?: number,
  setShowDeletedAlertModal?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const actions: IAction[] = [
    {
      id: "delete",
      actionName: "Eliminar",
      content: (entry: IEntry) => (
        <DeleteCyclePayment
          data={entry}
          setEntryDeleted={setEntryDeleted}
          uniqueEditionRecord={uniqueEditionRecord}
          setShowDeletedAlertModal={setShowDeletedAlertModal}
        />
      ),
    },
  ];

  return actions;
};

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 5 },
  { breakpoint: "(max-width: 744px)", totalColumns: 3 },
];

export { titles, actionsConfig, breakPoints };
