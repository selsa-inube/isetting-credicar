import { ICompanyEntry } from "../ICompanyEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";
import { IOrdinaryCyclesEntry } from "../IOrdinaryCyclesEntry";

interface IAddPayrollAgreementForms {
  company: { isValid: boolean; values: ICompanyEntry };
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  ordinaryCycles: { isValid: boolean; values: IOrdinaryCyclesEntry };
}

export type { IAddPayrollAgreementForms };
