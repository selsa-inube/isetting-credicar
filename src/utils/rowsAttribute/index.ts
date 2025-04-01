import { IEntry } from "@design/data/table/types";

const rowsAttribute = (values: IEntry[]) =>
  values.length <= 2 ? "1fr" : `repeat(${Math.ceil(values.length / 2)}, 1fr)`;

export { rowsAttribute };
