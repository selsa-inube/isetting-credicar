import { IEntry } from "@design/data/table/types";
import { IDetailsTabsConfig } from "@ptypes/payrollAgreement/requestInProgTab/IDetailsTabsConfig";

interface IUseDetailsPayrollAgreement {
  data: IEntry;
  detailsTabsConfig: IDetailsTabsConfig;
}
export type { IUseDetailsPayrollAgreement };
