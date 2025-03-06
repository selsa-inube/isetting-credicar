import { IRuleDecision } from "@isettingkit/input";
import { IGeneralInformationEntry } from "@ptypes/moneyDestination/tabs/moneyDestinationTab/forms/IGeneralInformationDestination";

interface IFormsUpdateData {
  personalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  creditline: { isValid: boolean; values: IRuleDecision[] };
}

export type { IFormsUpdateData };
