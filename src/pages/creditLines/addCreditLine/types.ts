import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "../forms/generalInformation/types";
import { ICreditProspectEntry } from "../../../design/forms/creditProspect/types";

interface IFormsCreditlines {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  creditProspect: { isValid: boolean; values: ICreditProspectEntry };
}

interface IFormsCreditlinesRefs {
  generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
  creditProspect: React.RefObject<FormikProps<ICreditProspectEntry>>;
}

export type { IFormsCreditlines, IFormsCreditlinesRefs };
