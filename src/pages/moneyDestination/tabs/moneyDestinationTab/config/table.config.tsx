import { IAction, IEntry, ITitle } from "@components/data/Table/types";
import { Edit } from "../components/Edit";
import { Delete } from "../components/Delete";
import { Details } from "../components/Details";

const titles: ITitle[] = [
  {
    id: "abbreviatedName",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "descriptionUse",
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
