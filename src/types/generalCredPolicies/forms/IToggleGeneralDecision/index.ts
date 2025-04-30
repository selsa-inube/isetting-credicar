interface IToggleGeneralDecision {
  name: string;
  label: string;
  isChecked: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IToggleGeneralDecision };
