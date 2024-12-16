import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { IAction, ITitle } from "@components/data/Table/types";
import { ComponentAppearance } from "@ptypes/aparences.types";

const titles: ITitle[] = [
  {
    id: "date",
    titleName: "Fecha",
    priority: 0,
  },
  {
    id: "description",
    titleName: "Descripción",
    priority: 1,
  },
  {
    id: "state",
    titleName: "Estado",
    priority: 2,
  },
];

const actions: IAction[] = [
  {
    id: "Details",
    content: () => (
      <Icon
        appearance={ComponentAppearance.DARK}
        icon={<MdOutlineRemoveRedEye />}
        size="16px"
        cursorHover
      />
    ),
  },

  {
    id: "delete",
    content: () => (
      <Icon
        appearance={ComponentAppearance.DANGER}
        icon={<MdDeleteOutline />}
        size="16px"
        cursorHover
      />
    ),
  },
];

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 3 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actions, breakPoints };
