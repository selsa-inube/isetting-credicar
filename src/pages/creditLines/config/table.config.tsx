import { MdDeleteOutline, MdOutlineCreate } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { IAction, IEntry, ITitle } from "@components/data/Table/types";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Details } from "../components/Details";

const titles: ITitle[] = [
  {
    id: "name",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "description",
    titleName: "Descripción",
    priority: 1,
  },
];

const actions: IAction[] = [
  {
    id: "Details",

    content: (entry: IEntry) => <Details data={entry} />,
  },
  {
    id: "edit",
    content: () => (
      <Icon
        appearance={ComponentAppearance.PRIMARY}
        icon={<MdOutlineCreate />}
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
  { breakpoint: "(min-width: 745px)", totalColumns: 2 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actions, breakPoints };
