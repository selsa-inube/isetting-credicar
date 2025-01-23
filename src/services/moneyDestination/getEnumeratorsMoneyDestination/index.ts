import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { getEnumeratorsMoneyDestination } from "@api/isettingCredicar/getEnumeratorsMoneyDestination";
import { mapEnumMoneyDestinationToEntities } from "./mappers";

const enumeratorsMoneyDestination = async (
  enumDestination: string,
  bussinesUnits: string,
): Promise<IEnumeratorsMoneyDestination[]> => {
  const data: IEnumeratorsMoneyDestination[] =
    await getEnumeratorsMoneyDestination(enumDestination, bussinesUnits);
  return Array.isArray(data) ? mapEnumMoneyDestinationToEntities(data) : [];
};

export { enumeratorsMoneyDestination };
