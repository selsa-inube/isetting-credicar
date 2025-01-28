import { nameDestination } from "@config/destination/nameDestination";

const normalizeNameDestination = (code: string) =>
  nameDestination.find((element) => element.code === code);

export { normalizeNameDestination };