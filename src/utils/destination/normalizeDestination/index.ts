import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";

const normalizeDestination = (
    enumData: IEnumeratorsMoneyDestination[],
    code: string,
  ) => enumData.find((element) => element.code === code);

export { normalizeDestination };