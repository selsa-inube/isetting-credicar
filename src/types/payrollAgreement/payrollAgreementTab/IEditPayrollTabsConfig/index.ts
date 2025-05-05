import { ITabConfig } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/tabs/ITabConfig";

interface IEditPayrollTabsConfig {
  generalInformation: ITabConfig;
  regularPaymentCycles: ITabConfig;
  extraordinaryPaymentCycles: ITabConfig;
}

export type { IEditPayrollTabsConfig };
