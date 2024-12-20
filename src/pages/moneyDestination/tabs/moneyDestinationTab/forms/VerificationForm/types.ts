import { IRuleDecision } from "@isettingkit/input";
import { IGeneralInformationEntry } from "../GeneralInformation/types";

export interface IFormsUpdateData {
  personalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  creditline: { isValid: boolean; values: IRuleDecision[] };
}
