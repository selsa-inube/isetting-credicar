import { mainCards } from "@config/mainCard";

const normalizeOptionsByPublicCode = (publicCode: string) =>
  mainCards.find((data) => data.publicCode === publicCode);

export { normalizeOptionsByPublicCode };
