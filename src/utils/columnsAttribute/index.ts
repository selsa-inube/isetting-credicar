import { IEntry } from "@design/data/table/types";

const columnsAttribute = (values: IEntry[]) =>
  values.length === 1
    ? "1fr"
    : values.length === 2
      ? "1fr 1fr"
      : `repeat(${Math.ceil(values.length / 2)}, 1fr)`;

export { columnsAttribute };
