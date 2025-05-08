import { IEntry } from "@design/data/table/types";

interface IMoneyDestinationTabUI {
  entries: IEntry[];
  loading: boolean;
  searchMoneyDestination: string;
  smallScreen: boolean;
  columnWidths: number[];
  onSearchMoneyDestination: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEntryDeleted: (value: string | number) => void;
}

export type { IMoneyDestinationTabUI };
