interface ICreditProspectEntry {
  additionalDebtors: string;
}

interface IOptionsProspect {
  id: string;
  label: string;
  isActive: boolean;
}

export type { ICreditProspectEntry, IOptionsProspect };
