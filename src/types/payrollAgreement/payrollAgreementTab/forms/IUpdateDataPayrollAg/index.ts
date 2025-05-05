import { ICompanyEntry } from "../ICompanyEntry";
import { IExtraordinaryCyclesEntry } from "../IExtraordinaryCyclesEntry";
import { IGeneralInformationEntry } from "../IGeneralInformationPayroll";
import { IOrdinaryCyclesEntry } from "../IOrdinaryCyclesEntry";

interface IFormsUpdateData {
  company: { isValid: boolean; values: ICompanyEntry };
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  ordinaryCycles: { isValid: boolean; values: IOrdinaryCyclesEntry[] };
  extraordinaryCycles: {
    isValid: boolean;
    values: IExtraordinaryCyclesEntry[];
  };
}

export type { IFormsUpdateData };
