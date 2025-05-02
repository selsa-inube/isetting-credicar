import { FormikProps } from "formik";
import { IDecisionsGeneralEntry } from "@ptypes/generalCredPolicies/forms/IDecisionsGeneralEntry";

interface IUseDecisionsGenForm {
  initialValues: IDecisionsGeneralEntry;
  ref: React.ForwardedRef<FormikProps<IDecisionsGeneralEntry>>;
  onSubmit: ((values: IDecisionsGeneralEntry) => void) | undefined;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  editDataOption?: boolean;
  handleFormValidChange?: (isValid: boolean) => void;
}

export type { IUseDecisionsGenForm };
