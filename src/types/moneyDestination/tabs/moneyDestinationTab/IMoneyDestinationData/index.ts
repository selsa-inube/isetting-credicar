interface IMoneyDestinationData {
  abbreviatedName: string | JSX.Element;
  descriptionUse: string;
  iconReference: string;
  moneyDestinationId: string;
  id?: string | number;
  name?: string;
}

export type { IMoneyDestinationData };
