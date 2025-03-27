import { Icon } from "@inubekit/inubekit";
import { MdDeleteOutline } from "react-icons/md";
import { ComponentAppearance } from "@enum/appearances";
import { IAction, ITitle } from "@design/data/table/types";

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

const actions: IAction[] = [
  {
    id: "delete",
    actionName: "Eliminar",
    content: () => (
      <Icon
        icon={<MdDeleteOutline />}
        appearance={ComponentAppearance.DANGER}
        size="16px"
      />
    ),
  },
];

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 5 },
  { breakpoint: "(max-width: 744px)", totalColumns: 3 },
];

export { titles, actions, breakPoints };
