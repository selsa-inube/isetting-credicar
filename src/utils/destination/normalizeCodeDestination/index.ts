import { nameDestination } from "@config/destination/nameDestination";

const normalizeCodeDestination = (name: string) =>
  nameDestination.find((element) => element.name === name);

export { normalizeCodeDestination };