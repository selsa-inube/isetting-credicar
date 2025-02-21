import { Details } from "@pages/moneyDestination/tabs/requestsInProgressTab/tools/details";
import { IAction, ITitle } from "@design/data/table/types";
import { Cancel } from "@pages/moneyDestination/tabs/requestsInProgressTab/tools/cancel";

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
      content: (entry) => <Details data={entry} />,
    },

    {
      id: "delete",
      content: (entry) => (
        <Cancel data={entry} setEntryCanceled={setEntryCanceled} />
      ),
    },
  ];

  return actions;
};

const breakPoints = [
  { breakpoint: "(min-width: 745px)", totalColumns: 3 },
  { breakpoint: "(max-width: 744px)", totalColumns: 1 },
];

export { titles, actionsConfig, breakPoints };
