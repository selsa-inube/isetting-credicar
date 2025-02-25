import { IInputStatus } from "@isettingkit/input";

interface IValue {
  from?: number | string | Date;
  labelFrom?: string;
  labelTo?: string;
  list?: string[];
  listSelected?: string[];
  messageFrom?: string;
  messageTo?: string;
  statusFrom?: IInputStatus;
  statusTo?: IInputStatus;
  to?: number | string | Date;
  value?: string | number | string[];
}

export type { IValue };
