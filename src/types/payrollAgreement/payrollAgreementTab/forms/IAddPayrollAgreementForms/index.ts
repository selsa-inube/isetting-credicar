import { ICompanyEntry } from "../ICompanyEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";

interface IAddPayrollAgreementForms {
  company: { isValid: boolean; values: ICompanyEntry };
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}

export type { IAddPayrollAgreementForms };
