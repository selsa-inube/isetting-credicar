interface ITabConfig {
  id: string;
  isDisabled: boolean;
  label: string;
  notificationIndicators?: number;
}

interface IDetailsTabsConfig {
  generalData: ITabConfig;
  creditProspectusOptions: ITabConfig;
  maximumAmount: ITabConfig;
  term: ITabConfig;
}

export type { IDetailsTabsConfig };
