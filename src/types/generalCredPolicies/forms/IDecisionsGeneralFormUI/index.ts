import { IDecisionsGeneralEntry } from "../IDecisionsGeneralEntry";
import { FormikProps } from "formik";

interface IDecisionsGeneralFormUI {
  editDataOption: boolean;
  formik: FormikProps<IDecisionsGeneralEntry>;
  loading: boolean;
  showModal: boolean;
  isMobile: boolean;
  isDisabledButton: boolean;
  onToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInfoModal: () => void;
  onButtonClick: () => void;
  onResetEdit?: () => void;
  onResetAdd?: () => void;
  onReferenceChange: (name: string, value: string) => void;
  onChangeMethods: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IDecisionsGeneralFormUI };
