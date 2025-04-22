import { IEntry } from "@design/data/table/types";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  widthFirstColumn: number;
  smallScreen: boolean;
  setEntryCanceled: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRequestsInProgressTabUI };
