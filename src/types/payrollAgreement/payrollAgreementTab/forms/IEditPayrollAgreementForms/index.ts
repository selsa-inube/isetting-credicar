import { IExtraordinaryCyclesEntry } from "../IExtraordinaryCyclesEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";
import { IOrdinaryCyclesEntry } from "../IOrdinaryCyclesEntry";

interface IEditPayrollAgreementForms {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  ordinaryCycles: { isValid: boolean; values: IOrdinaryCyclesEntry[] };
  extraordinaryCycles: {
    isValid: boolean;
    values: IExtraordinaryCyclesEntry[];
  };
}

export type { IEditPayrollAgreementForms };
