import { ICompanyEntry } from "../ICompanyEntry";
import { IExtraordinaryCyclesEntry } from "../IExtraordinaryCyclesEntry";

interface IAddPayrollAgreementForms {
  company: { isValid: boolean; values: ICompanyEntry };
  extraordinaryCycles: { isValid: boolean; values: IExtraordinaryCyclesEntry };
}

export type { IAddPayrollAgreementForms };
