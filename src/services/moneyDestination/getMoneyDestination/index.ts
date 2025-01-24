import { IMoneyDestinationData } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { getMoneyDestination } from "@api/isettingCredicar/getMoneyDestination";
import { mapMoneyDestinationToEntities } from "./mappers";

const moneyDestinationData = async (
  bussinesUnits: string,
): Promise<IMoneyDestinationData[]> => {
  const data: IMoneyDestinationData[] =
    await getMoneyDestination(bussinesUnits);
  return Array.isArray(data) ? mapMoneyDestinationToEntities(data) : [];
};

export { moneyDestinationData };
