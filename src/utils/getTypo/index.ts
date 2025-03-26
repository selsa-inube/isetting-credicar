import { Size } from "@design/inputs/selectCheck/types";

const getTypo = (size: Size) => {
  return size === "compact" ? "small" : "medium";
};

export { getTypo };
