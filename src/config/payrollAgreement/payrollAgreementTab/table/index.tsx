import { IAction, ITitle } from "@design/data/table/types";
import { Icon } from "@inubekit/inubekit";
import {
  MdDeleteOutline,
  MdOutlineCreate,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { ComponentAppearance } from "@src/enum/appearances";

const titles: ITitle[] = [
  {
    id: "abbreviatedName",
    titleName: "Nombre de nómina",
    priority: 0,
  },
];

const actions: IAction[] = [
  {
    id: "Details",
    content: () => (
      <Icon
        icon={<MdOutlineRemoveRedEye />}
        appearance={ComponentAppearance.DARK}
        size="16px"
      />
    ),
  },
  {
    id: "edit",
    content: () => (
      <Icon
        icon={<MdOutlineCreate />}
        appearance={ComponentAppearance.DARK}
        size="16px"
      />
    ),
  },
  {
    id: "delete",
    content: () => (
      <Icon
        icon={<MdDeleteOutline />}
        appearance={ComponentAppearance.DARK}
        size="16px"
      />
    ),
  },
];

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 2 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actions, breakPoints };
