import { t } from "i18next";

const moneyDestinationTabsConfig = {
  moneyDestination: {
    id: "moneyDestination",
    isDisabled: false,
    label: t("moneyDestination.tabs.moneyDestination"),
  },
  requestsInProgress: {
    id: "requestsInProgress",
    isDisabled: false,
    label: t("moneyDestination.tabs.requestsInProgress"),
    notificationIndicators: 2,
  },
};

export { moneyDestinationTabsConfig };
