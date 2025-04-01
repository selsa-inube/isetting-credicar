import { IEnumerators } from "@ptypes/IEnumerators";
import { IServerDomain } from "@ptypes/IServerDomain";
import { normalizeEnumTranslation } from "../normalizeEnumTranslation";

const optionsFromEnumerators = (options: IEnumerators[]): IServerDomain[] =>
  options.map((item) => {
    return {
      id: item.code,
      label: normalizeEnumTranslation(item.code)?.name ?? item.code,
      value: item.code,
    };
  });

export { optionsFromEnumerators };
