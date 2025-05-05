import { IEnumerators } from "@ptypes/IEnumerators";

const mapEnumMoneyDestinationToEntity = (
  enumData: IEnumerators,
): IEnumerators => {
  const business: IEnumerators = {
    code: String(enumData.code),
    description: String(enumData.description),
    value: String(enumData.value),
  };
  return business;
};

const mapEnumMoneyDestinationToEntities = (
  enums: IEnumerators[],
): IEnumerators[] => {
  return enums.map(mapEnumMoneyDestinationToEntity);
};

export { mapEnumMoneyDestinationToEntity, mapEnumMoneyDestinationToEntities };
