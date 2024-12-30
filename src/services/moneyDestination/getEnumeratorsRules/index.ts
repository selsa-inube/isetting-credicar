import { IEnumeratorsRules } from "@pages/moneyDestination/tabs/moneyDestinationTab/types";
import { getEnumeratorsRules } from "@api/isettingCredicarQuery";
import { mapEnumeratorsRulesApiToEntity } from "./mappers";

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
