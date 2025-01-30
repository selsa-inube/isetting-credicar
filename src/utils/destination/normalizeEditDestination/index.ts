import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";

const normalizeEditDestination = (
  enumData: IEnumeratorsMoneyDestination[],
  value: string,
) => enumData.find((element) => element.value === value);

export { normalizeEditDestination };
