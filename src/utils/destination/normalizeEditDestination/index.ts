import { IEnumerators } from "@ptypes/IEnumerators";

const normalizeEditDestination = (enumData: IEnumerators[], value: string) =>
  enumData.find((element) => element.value === value);

export { normalizeEditDestination };
