import { getEnumeratorsRules } from "@api/isettingCredicar/getEnumeratorsRules";
import { mapEnumeratorsRulesApiToEntity } from "./mappers";
import { IEnumeratorsRules } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/decisions/IEnumeratorsRules";

const enumeratorsRules = async (
  ruleName: string,
  bussinesUnits: string,
): Promise<IEnumeratorsRules> => {
  const data: IEnumeratorsRules = await getEnumeratorsRules(
    ruleName,
    bussinesUnits,
  );
  return mapEnumeratorsRulesApiToEntity(data);
};

export { enumeratorsRules };
