import { ICreditProspectEntry } from "@design/forms/creditProspect/types";
import { IGeneralInformationEntry } from "@ptypes/creditLines/forms/IGeneralInformationEntry";

interface IFormsCreditlines {
    generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
    creditProspect: { isValid: boolean; values: ICreditProspectEntry };
}

export type { IFormsCreditlines };