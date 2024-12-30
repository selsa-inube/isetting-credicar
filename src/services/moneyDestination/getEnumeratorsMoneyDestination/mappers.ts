import { IEnumeratorsMoneyDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";

const mapEnumMoneyDestinationToEntity = (
  enumData: IEnumeratorsMoneyDestination,
): IEnumeratorsMoneyDestination => {
  const business: IEnumeratorsMoneyDestination = {
    code: String(enumData.code),
    description: String(enumData.description),
    value: String(enumData.value),
  };
  return business;
};

const mapEnumMoneyDestinationToEntities = (
  enums: IEnumeratorsMoneyDestination[],
): IEnumeratorsMoneyDestination[] => {
  return enums.map(mapEnumMoneyDestinationToEntity);
};

export { mapEnumMoneyDestinationToEntity, mapEnumMoneyDestinationToEntities };
