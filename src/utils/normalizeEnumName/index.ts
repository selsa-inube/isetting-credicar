import { normalizeEnumTranslation } from "../normalizeEnumTranslation";

const normalizeEnumName = (item: string) => {
  return normalizeEnumTranslation(item)?.name ?? item;
};

export { normalizeEnumName };
