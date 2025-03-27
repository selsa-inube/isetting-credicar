import { Icon } from "@inubekit/inubekit";
import { MdDeleteOutline, MdOutlineCreate } from "react-icons/md";
import { ComponentAppearance } from "@enum/appearances";
import { IAction, IEntry, ITitle } from "@design/data/table/types";
import { Details } from "@pages/payrollAgreement/tabs/payrollAgreementTab/tools/details";

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
    content: (entry: IEntry) => <Details data={entry} />,
  },
  {
    id: "edit",
    content: () => (
      <Icon
        icon={<MdOutlineCreate />}
        appearance={ComponentAppearance.PRIMARY}
        size="16px"
      />
    ),
  },
  {
    id: "delete",
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
  { breakpoint: "(min-width: 745px)", totalColumns: 2 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actions, breakPoints };
