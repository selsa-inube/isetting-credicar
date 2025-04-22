import { IEntry } from "@src/design/data/table/types";

interface IRequestsInProgressTabUI {
  entries: IEntry[];
  loading: boolean;
  searchrequestProgress: string;
  setEntryCanceled: (value: string | number) => void;
  onSearchrequestProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IRequestsInProgressTabUI };
