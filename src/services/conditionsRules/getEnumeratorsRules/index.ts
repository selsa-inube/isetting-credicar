import { IRuleDecision } from "@isettingkit/input";
import { getEnumeratorsRules } from "@api/isettingCredicar/getEnumeratorsRules";
import { mapEnumeratorsRulesApiToEntity } from "./mappers";

const enumeratorsRules = async (
  ruleName: string,
  bussinesUnits: string,
): Promise<IRuleDecision> => {
  const data: IRuleDecision = await getEnumeratorsRules(
    ruleName,
    bussinesUnits,
  );
  return mapEnumeratorsRulesApiToEntity(data);
};

export { enumeratorsRules };
