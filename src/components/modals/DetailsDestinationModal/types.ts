interface ITabConfig {
  id: string;
  isDisabled: boolean;
  label: string;
  notificationIndicators?: number;
}

interface IDetailsTabsConfig {
  generalData: ITabConfig;
  creditLine: ITabConfig;
}

export type { IDetailsTabsConfig };
