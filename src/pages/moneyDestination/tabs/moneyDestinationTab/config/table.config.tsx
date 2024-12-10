import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { IAction, IEntry, ITitle } from "@components/data/Table/types";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { Edit } from "../components/Edit";
import { Delete } from "../components/Delete";

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
    content: () => (
      <Icon
        appearance={ComponentAppearance.DARK}
        icon={<MdOutlineRemoveRedEye />}
        size="16px"
        cursorHover={true}
      />
    ),
  },
  {
    id: "edit",
    content: (entry: IEntry) => <Edit data={entry} />,
  },
  {
    id: "delete",
    content: (entry: IEntry) => <Delete data={entry} />,
  },
];

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 2 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actions, breakPoints };
