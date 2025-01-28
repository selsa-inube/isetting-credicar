import { iconDestination } from "@config/destination/iconDestination";

const normalizeIconDestination = (value: string) =>
  iconDestination.find((element) => element.value === value);

export { normalizeIconDestination };