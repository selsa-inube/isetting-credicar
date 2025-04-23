import { IEntry } from "@design/data/table/types";

interface ICancel {
  data: IEntry;
  setEntryCanceled: (id: string | number) => void;
}

export type { ICancel };
