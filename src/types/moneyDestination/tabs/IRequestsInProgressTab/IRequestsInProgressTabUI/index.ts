import { IEntry } from "@design/data/table/types";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  smallScreen: boolean;
  columnWidths: number[];
  setEntryCanceled: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRequestsInProgressTabUI };
