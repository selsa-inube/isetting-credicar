import { IEntry } from "@design/data/table/types";

const columnsMapping: Record<number, string> = {
  1: "1fr",
  2: "1fr 1fr",
};

const columnsAttribute = (values: IEntry[]): string =>
  columnsMapping[values.length] ||
  `repeat(${Math.ceil(values.length / 2)}, 1fr)`;

export { columnsAttribute };
