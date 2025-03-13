import { ICompanyEntry } from "../ICompanyEntry";

interface IAddPayrollAgreementForms {
  company: { isValid: boolean; values: ICompanyEntry };
}

export type { IAddPayrollAgreementForms };
