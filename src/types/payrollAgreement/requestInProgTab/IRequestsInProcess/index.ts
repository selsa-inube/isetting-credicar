import { IEntry } from "@design/data/table/types";
import { ILabel } from "@ptypes/ILabel";

interface IRequestsInProcess {
  data: IEntry;
  title: string;
  labelsOfRequest: ILabel[];
  labelsOfTraceability: ILabel[];
  isMobile: boolean;
  onCloseModal: () => void;
  onClick: () => void;
}

export type { IRequestsInProcess };
