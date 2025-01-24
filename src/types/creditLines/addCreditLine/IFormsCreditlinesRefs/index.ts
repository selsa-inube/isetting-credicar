import { FormikProps } from "formik";
import { IGeneralInformationEntry } from "@ptypes/creditLines/forms/IGeneralInformationEntry";
import { ICreditProspectEntry } from "@design/forms/creditProspect/types";

interface IFormsCreditlinesRefs {
    generalInformation: React.RefObject<FormikProps<IGeneralInformationEntry>>;
    creditProspect: React.RefObject<FormikProps<ICreditProspectEntry>>;
  }

export type { IFormsCreditlinesRefs };