import { IEnumeratorsRules } from "@design/forms/decisions/types";
import { getEnumeratorsRules } from "@api/isettingCredicar/getEnumeratorsRules";
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
