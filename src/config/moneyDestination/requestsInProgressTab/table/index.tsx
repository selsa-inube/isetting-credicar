import { MdDeleteOutline } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { IAction, ITitle } from "@components/data/Table/types";
import { ComponentAppearance } from "@enum/appearances";
import { Details } from "@pages/moneyDestination/tabs/requestsInProgressTab/components/details";

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
    id: "status",
    titleName: "Estado",
    priority: 2,
  },
];

const actions: IAction[] = [
  {
    id: "Details",
    content: (entry) => <Details data={entry} />,
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
