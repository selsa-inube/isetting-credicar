import { getEnumeratorsMoneyDestination } from "@api/isettingCredicar/getEnumeratorsMoneyDestination";
import { mapEnumMoneyDestinationToEntities } from "./mappers";
import { IEnumeratorsMoneyDestination } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/IEnumeratorsMoneyDestination";

const enumeratorsMoneyDestination = async (
  enumDestination: string,
  bussinesUnits: string,
): Promise<IEnumeratorsMoneyDestination[]> => {
  const data: IEnumeratorsMoneyDestination[] =
    await getEnumeratorsMoneyDestination(enumDestination, bussinesUnits);
  return Array.isArray(data) ? mapEnumMoneyDestinationToEntities(data) : [];
};

export { enumeratorsMoneyDestination };
