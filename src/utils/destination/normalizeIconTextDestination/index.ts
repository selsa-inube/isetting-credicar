import { iconDestination } from "@config/destination/iconDestination";

const normalizeIconTextDestination = (icon?: JSX.Element) =>
  iconDestination.find((element) => element.icon === icon);

export { normalizeIconTextDestination };
