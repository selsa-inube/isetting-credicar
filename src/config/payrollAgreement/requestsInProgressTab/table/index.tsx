import { Icon } from "@inubekit/inubekit";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IAction, ITitle } from "@design/data/table/types";
import { ComponentAppearance } from "@enum/appearances";
import { Cancel } from "@pages/payrollAgreement/tabs/requestsInProgressTab/tools/cancel";

const titles: ITitle[] = [
  {
    id: "requestDate",
    titleName: "Fecha",
    priority: 0,
  },
  {
    id: "description",
    titleName: "Descripción",
    priority: 1,
  },
  {
    id: "requestStatus",
    titleName: "Estado",
    priority: 2,
  },
];

const actionsConfig = (setEntryCanceled: (value: string | number) => void) => {
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
      id: "cancel",
      content: (entry) => (
        <Cancel data={entry} setEntryCanceled={setEntryCanceled} />
      ),
    },
  ];

  return actions;
};

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 3 },
  { breakpoint: "(max-width: 744px)", totalColumns: 2 },
  { breakpoint: "(max-width: 530px)", totalColumns: 1 },
];

export { titles, actionsConfig, breakPoints };
