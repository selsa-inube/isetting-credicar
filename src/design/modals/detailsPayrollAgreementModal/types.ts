interface ITabConfig {
  id: string;
  isDisabled: boolean;
  label: string;
  notificationIndicators?: number;
}

interface IDetailsTabsConfig {
  ordinaryPayment: ITabConfig;
  extraordinaryPayment: ITabConfig;
}

export type { IDetailsTabsConfig };
