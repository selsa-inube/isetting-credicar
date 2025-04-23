import { IEntry } from "@design/data/table/types";
import { IDetailsTabsConfig } from "@ptypes/payrollAgreement/requestInProgTab/IDetailsTabsConfig";
import { ILabel } from "@ptypes/ILabel";

interface IDetailsUI {
  data: IEntry;
  abbreviatedName: string;
  showModal: boolean;
  onToggleModal: () => void;
  detailsTabsConfig: IDetailsTabsConfig;
  defaultSelectedTab: string;
  filteredTabsConfig: IDetailsTabsConfig;
  isMobile: boolean;
  isSelected: string;
  labelsDetails: ILabel[];
  labelsPaymentCard: ILabel[];
  ordinaryPaymentData: IEntry[];
  extraordinaryPaymentData: IEntry[];
  screenTablet: boolean;
  onTabChange: (id: string) => void;
}

export type { IDetailsUI };
