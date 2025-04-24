import { IEntry } from "@design/data/table/types";
import { ILabel } from "@ptypes/ILabel";

interface IOrdinaryPaymentCycles {
  data: IEntry[];
  labelsPaymentCard: ILabel[];
}

export type { IOrdinaryPaymentCycles };
