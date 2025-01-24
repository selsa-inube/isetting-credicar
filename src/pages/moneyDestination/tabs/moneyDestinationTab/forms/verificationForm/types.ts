import { IRuleDecision } from "@isettingkit/input";
import { IGeneralInformationEntry } from "../generalInformation/types";

interface IFormsUpdateData {
  personalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  creditline: { isValid: boolean; values: IRuleDecision[] };
}

export type { IFormsUpdateData };
