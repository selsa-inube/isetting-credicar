import { IEntry } from "@design/data/table/types";
import { ILabel } from "@ptypes/ILabel";
import { IDetailsTabsConfig } from "../IDetailsTabsConfig";

interface IMoreDetails {
  data: IEntry;
  abbreviatedName: string;
  filteredTabsConfig: IDetailsTabsConfig;
  detailsTabsConfig: IDetailsTabsConfig;
  isSelected: string;
  defaultSelectedTab: string;
  portalId: string;
  smallScreenTab: boolean;
  labelsDetails: ILabel[];
  labelsPaymentCard: ILabel[];
  onCloseModal: () => void;
  onTabChange: (id: string) => void;
  ordinaryPaymentData?: IEntry[];
  extraordinaryPaymentData?: IEntry[];
  ordinaryIncludedData?: IEntry[];
  ordinaryEliminatedData?: IEntry[];
  extraordinaryIncludedData?: IEntry[];
  extraordinaryEliminatedData?: IEntry[];
}

export type { IMoreDetails };
