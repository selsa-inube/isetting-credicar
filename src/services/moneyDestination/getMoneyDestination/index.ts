import { getMoneyDestination } from "@api/isettingCredicar/getMoneyDestination";
import { mapMoneyDestinationToEntities } from "./mappers";
import { IMoneyDestinationData } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IMoneyDestinationData";

const moneyDestinationData = async (
  bussinesUnits: string,
): Promise<IMoneyDestinationData[]> => {
  const data: IMoneyDestinationData[] =
    await getMoneyDestination(bussinesUnits);
  return Array.isArray(data) ? mapMoneyDestinationToEntities(data) : [];
};

export { moneyDestinationData };
