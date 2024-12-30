interface IAttribute {
  id: string;
  label: string;
  value: number | string | IAttribute[];
}

export type { IAttribute };