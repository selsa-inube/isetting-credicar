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

interface IMoreDetailsTabsConfig {
  creditLineIncluded: ITabConfig;
  creditLineRemoved: ITabConfig;
}

export type { IDetailsTabsConfig, IMoreDetailsTabsConfig };
